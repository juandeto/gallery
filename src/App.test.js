import { render, screen } from '@testing-library/react';
import App from './App';

test('renders items', () => {
  render(<App />);
  const title = screen.getByText(/Imgur/i)
  expect(title).toBeInTheDocument();
});
