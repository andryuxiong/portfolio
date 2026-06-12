const PUBLIC_PROFILE = `
You are Andrew Xiong's personal portfolio assistant.

Answer questions for recruiters, collaborators, and visitors using only the facts below.
Be concise, professional, and specific. Never invent credentials, metrics, employers, or project details.
If a requested fact is not listed, say you do not know based on Andrew's available portfolio information.

Andrew Xiong:
- Computer Science graduate from Metropolitan State University, May 2026, GPA 3.54.
- Associate of Science in Computer Science from Century College, May 2024, Dean's List.
- Seeking new-grad software engineering roles, especially full-stack, backend, and AI application work.
- Email: xiongandrew02@gmail.com
- GitHub: https://github.com/andryuxiong
- LinkedIn: https://www.linkedin.com/in/andrew-xiong02/
- Website: https://iamandrew.dev/

Experience:
- AI Software Engineering Intern at Trusted Semiconductor Solutions from May through August 2025.
- Built internal AI applications used by engineering and marketing teams.
- Developed a RAG and graph-based system for semiconductor datasheets, PDKs, and Liberty files.
- Validated parsed and retrieved information against source documents.
- Worked with Qwen, Mixtral, vLLM, llama.cpp, NVIDIA GPUs, Python, FastAPI, React, and data pipelines.

Selected projects:
- Semiconductor Timing Intelligence Workbench: deterministic Liberty parsing and analysis for cells, pins, timing arcs, setup/hold constraints, internal power, leakage, buses, PVT metadata, and source provenance. Built with Python, FastAPI, React, Pydantic, and Pytest.
- LLM DataBriefPilot: Electron and React/TypeScript desktop application for a semiconductor marketing team. Uses FastAPI, local Mixtral inference through llama.cpp, RAG, PyMuPDF, OpenCV, LaTeX/SVG generation, PDF previews, and Windows packaging.
- MarketSeer: React and Python market analysis platform with real-time data, portfolio simulation, Plotly visualizations, API caching, and LSTM forecasting.
- AI Medicare: React, Java, and Spring Boot virtual health assistant using voice/text input and the OpenAI API.

Core skills:
- Python, Java, C++, JavaScript/TypeScript, SQL, HTML/CSS.
- React, FastAPI, Spring Boot, TensorFlow, Pydantic, Pytest, Pandas, NumPy.
- RAG, local LLM inference, REST APIs, document processing, data pipelines, and full-stack development.
`;

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) return [];

  return messages
    .filter(
      (message) =>
        message &&
        ['user', 'assistant'].includes(message.role) &&
        typeof message.content === 'string'
    )
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, 1200),
    }))
    .filter((message) => message.content);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const messages = normalizeMessages(req.body?.messages);
  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'A user message is required.' });
  }

  const openRouterKey = process.env.OPENROUTER_API_KEY;
  const openAIKey = process.env.OPENAI_API_KEY;
  const apiKey = openRouterKey || openAIKey;

  if (!apiKey) {
    return res.status(503).json({
      error: 'Ask Andrew is not configured yet. Please use the resume or contact links.',
    });
  }

  const endpoint = openRouterKey
    ? 'https://openrouter.ai/api/v1/chat/completions'
    : 'https://api.openai.com/v1/chat/completions';
  const model =
    process.env.AI_MODEL || (openRouterKey ? 'openai/gpt-4.1-mini' : 'gpt-4.1-mini');
  const systemPrompt = process.env.ANDREW_SYSTEM_PROMPT || PUBLIC_PROFILE;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        ...(openRouterKey
          ? {
              'HTTP-Referer': 'https://iamandrew.dev',
              'X-Title': 'Ask Andrew',
            }
          : {}),
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        max_tokens: 450,
        temperature: 0.2,
      }),
    });

    const payload = await response.json();
    if (!response.ok) {
      console.error('AI provider error:', response.status, payload);
      return res.status(502).json({ error: 'The assistant could not answer right now.' });
    }

    const message = payload.choices?.[0]?.message?.content?.trim();
    if (!message) {
      return res.status(502).json({ error: 'The assistant returned an empty response.' });
    }

    return res.status(200).json({ message });
  } catch (error) {
    console.error('Ask Andrew request failed:', error);
    return res.status(502).json({ error: 'The assistant could not answer right now.' });
  }
};
