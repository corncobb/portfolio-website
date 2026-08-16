import React from 'react';
import { render } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Header } from './components';

// jsdom has no real <canvas> 2D context, which crashes the particle
// background's animation loop. Stub it out for this smoke test.
vi.mock('react-particles-js', () => ({
  default: () => null
}));

test('renders the home page avatar', () => {
  const { getByAltText } = render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
  expect(getByAltText('Cameron Cobb')).toBeInTheDocument();
});
