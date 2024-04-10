import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import React from 'react';


describe('App', () => {
  it('renders homepage with title', () => {
    render(<HomePage />);
    expect(screen.getByText(/BrainScript/)).toBeInTheDocument();
  });

  it('renders homepage with next button', () => {
    render(<HomePage />);
    expect(screen.getByRole('button')).toBeInTheDocument()
  });

  it('redirects to setup page when button clicked', async () => {
    render(<HomePage />);
    //TODO:
  })
})



