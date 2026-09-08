import { render, screen, fireEvent, waitFor, within, act } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';
import emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser', () => ({ sendForm: jest.fn() }));
window.scrollTo = jest.fn();
Element.prototype.scrollIntoView = jest.fn();

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  jest.clearAllMocks();
});

const renderApp = () => render(<ChakraProvider theme={theme}><App /></ChakraProvider>);

window.matchMedia = window.matchMedia || (() => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
}));

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = IntersectionObserverMock;
global.IntersectionObserver = IntersectionObserverMock;

test('renders the current portfolio introduction', () => {
  const { container } = render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
  expect(screen.getByRole('heading', { name: 'Andrew Xiong' })).toBeTruthy();
  expect(screen.getByText(/computer science graduate and software engineer/i)).toBeTruthy();
  expect(screen.getByRole('heading', { name: 'RAG Evaluation Platform' })).toBeTruthy();
  expect(screen.getByRole('heading', { name: 'Northstar Commerce Intelligence' })).toBeTruthy();
  expect(screen.getByRole('heading', { name: 'Around Social Availability App' })).toBeTruthy();

  expect(
    container.querySelector(
      'a[href="https://drive.google.com/file/d/1U6rmfZ1_i4wypW7DAFumhqrY853p4E67/view?usp=sharing"]'
    )
  ).toBeTruthy();
});

test('preserves contact details after failure, prevents duplicate sends, and supports retry', async () => {
  let rejectSend;
  emailjs.sendForm.mockImplementationOnce(() => new Promise((resolve, reject) => { rejectSend = reject; }));
  renderApp();
  const name = screen.getByRole('textbox', { name: /Name/ });
  const email = screen.getByRole('textbox', { name: /Email/ });
  const message = screen.getByRole('textbox', { name: /Message/ });
  fireEvent.change(name, { target: { value: 'Test visitor' } });
  fireEvent.change(email, { target: { value: 'test@example.com' } });
  fireEvent.change(message, { target: { value: 'Please keep this message.' } });
  fireEvent.click(screen.getByRole('button', { name: "Let's Connect!" }));
  expect(screen.getByRole('button', { name: /Sending/ }).disabled).toBe(true);
  fireEvent.submit(message.closest('form'));
  expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
  await act(async () => rejectSend(new Error('Simulated delivery failure')));
  expect(screen.getByRole('alert').textContent).toMatch(/could not be sent/);
  expect(name.value).toBe('Test visitor');
  expect(email.value).toBe('test@example.com');
  expect(message.value).toBe('Please keep this message.');
  emailjs.sendForm.mockResolvedValueOnce({ status: 200 });
  fireEvent.click(screen.getByRole('button', { name: "Let's Connect!" }));
  await screen.findByText(/Thank you for reaching out/);
  expect(emailjs.sendForm).toHaveBeenCalledTimes(2);
  expect(screen.queryByRole('textbox', { name: /Message/ })).toBeNull();
});

test('closes the mobile menu and returns visitors to the top of a new page', async () => {
  renderApp();
  const toggle = screen.getByRole('button', { name: 'Toggle Menu', hidden: true });
  fireEvent.click(toggle);
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  const mobile = screen.getByRole('navigation', { name: 'Mobile navigation', hidden: true });
  fireEvent.click(within(mobile).getByRole('link', { name: 'Projects', hidden: true }));
  await screen.findByRole('heading', { name: 'Projects built around real engineering problems.' });
  expect(toggle.getAttribute('aria-expanded')).toBe('false');
  expect(screen.queryByRole('navigation', { name: 'Mobile navigation', hidden: true })).toBeNull();
  expect(window.scrollTo).toHaveBeenLastCalledWith(0, 0);
  expect(document.activeElement.id).toBe('main-content');
});

test('Contact navigates from Projects to the home form, including repeated selection', async () => {
  window.history.replaceState({}, '', '/projects');
  renderApp();
  fireEvent.click(screen.getByRole('link', { name: 'Contact', hidden: true }));
  await waitFor(() => expect(document.activeElement.id).toBe('contact'));
  expect(window.location.pathname + window.location.hash).toBe('/#contact');
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  Element.prototype.scrollIntoView.mockClear();
  fireEvent.click(screen.getByRole('link', { name: 'Contact', hidden: true }));
  await waitFor(() => expect(Element.prototype.scrollIntoView).toHaveBeenCalled());
});

test('unknown routes offer a working way home', async () => {
  window.history.replaceState({}, '', '/missing-page');
  renderApp();
  expect(screen.getByRole('heading', { name: 'Page not found' })).toBeTruthy();
  fireEvent.click(screen.getByRole('link', { name: 'Back to home' }));
  await screen.findByRole('heading', { name: 'Andrew Xiong' });
});
