import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'App';

describe('App Component', () => {
  test('Renders without crashing', () => {
    render(<App />);

    const title = screen.getByRole('heading');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/hello react app/i);
  });
});
