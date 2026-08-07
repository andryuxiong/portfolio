import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';

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

  expect(container.querySelector('a[href="/Andrew-Xiong-Resume.pdf"]')).toBeTruthy();
});
