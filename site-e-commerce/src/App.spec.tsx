import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  /*   it('should render the App component', () => {
    const appElement = screen.getByText(/Vite + React/i);
    expect(appElement).toBeTruthy();
  }); */

  it('should initially display count as 0', () => {
    const countElement = screen.getByText(/count is 0/i);
    expect(countElement).toBeTruthy();
  });

  it('should increment the count when the button is clicked', () => {
    fireEvent.click(screen.getByText(/count is 0/i));
    const updatedCountElement = screen.getByText(/count is 1/i);
    expect(updatedCountElement).toBeTruthy();
  });

  it('should render Vite and React logos with links', () => {
    const viteLogoElement = screen.getByAltText(/Vite logo/i);
    expect(viteLogoElement).toBeTruthy();

    const reactLogoElement = screen.getByAltText(/React logo/i);
    expect(reactLogoElement).toBeTruthy();

    const viteLinkElement = screen.getByRole('link', { name: /Vite/i });
    expect(viteLinkElement).toBeTruthy();

    const reactLinkElement = screen.getByRole('link', { name: /React/i });
    expect(reactLinkElement).toBeTruthy();
  });
});
