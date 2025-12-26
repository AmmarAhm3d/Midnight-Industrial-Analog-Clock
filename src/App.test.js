import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders clock app elements', () => {
  render(<App />);
  
  // Check if date display exists (it will contain the current year)
  const currentYear = new Date().getFullYear();
  const dateElement = screen.getByText(new RegExp(currentYear.toString(), 'i'));
  expect(dateElement).toBeInTheDocument();

  // Check if location "Locating...", "Fetching", or "Geolocation not supported" text is present
  const locationElement = screen.getByText(/Locating...|Fetching|Geolocation not supported/i);
  expect(locationElement).toBeInTheDocument();
});
