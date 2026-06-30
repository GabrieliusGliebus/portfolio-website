import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page greeting', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /gabrielius gliebus/i });
  expect(headingElement).toBeInTheDocument();
});
