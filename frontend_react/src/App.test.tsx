import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('portfolio', () => {
  it('presents the role and primary navigation', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /frontend developer/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/i'm harry wang/i)).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view selected work/i })).toHaveAttribute('href', '#work');
  });

  it('filters work with an accessible pressed state', () => {
    render(<App />);
    const cmsFilter = screen.getByRole('button', { name: 'CMS' });

    fireEvent.click(cmsFilter);

    expect(cmsFilter).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('heading', { name: 'Portfolio Content Studio' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Developer Portfolio' })).not.toBeInTheDocument();
  });
});
