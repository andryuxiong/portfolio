# Andrew Xiong's Portfolio

Personal portfolio for Andrew Xiong, a software engineer and computer science graduate.

## 🚀 Features
- Modern, responsive design
- Light and dark mode support
- Animated project cards with live demo and GitHub links
- Current resume, internship experience, skills, and project pages
- Personalized Ask Andrew assistant backed by a Vercel serverless function

## 🛠️ Tech Stack
- React.js
- Chakra UI
- Framer Motion
- React Icons
- Vercel (deployment)

## 📂 Project Structure
- `/src` — Main source code
- `/public` — Static assets and resume

## 🌐 Live Demo
[Visit the live site](https://iamandrew.dev/)


## 📄 Resume
My current resume is available through the Resume link in the site navigation.

## Ask Andrew Configuration

The frontend calls `POST /api/chat`. Configure one provider in Vercel:

```text
OPENAI_API_KEY=...
# or
OPENROUTER_API_KEY=...

AI_MODEL=...
ANDREW_SYSTEM_PROMPT=...
```

`AI_MODEL` and `ANDREW_SYSTEM_PROMPT` are optional. The API includes a public-profile fallback prompt, while provider credentials remain server-side.

## 📝 How to Run Locally
```bash
git clone https://github.com/andryuxiong/portfolio.git
cd portfolio
npm install
npm start
```

## 📦 Build for Production
```bash
npm run build
```
---
