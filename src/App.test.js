import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => {
  const React = require('react');

  return {
    HashRouter: ({ children }) => React.createElement(React.Fragment, null, children),
    Routes: ({ children }) => Array.isArray(children) ? children[0] : children,
    Route: ({ element }) => element,
    Link: ({ children, to }) => React.createElement('a', { href: to }, children),
    useLocation: () => ({ pathname: '/' }),
    useParams: () => ({ category: 'unity' }),
  };
});

test('renders landing page greeting', () => {
  window.scrollTo = jest.fn();

  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /gabrielius gliebus/i });
  expect(headingElement).toBeInTheDocument();
});
