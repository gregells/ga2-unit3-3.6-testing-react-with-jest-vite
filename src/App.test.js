// import { test, expect } from 'jest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('renders App component', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/Hello World/i);
  
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

// test('demo', () => {
//   expect(true).toBe(true)
// })

// import { render } from "@testing-library/react"
// import '@testing-library/jest-dom'
// import App from "./App"

// test('demo', () => {
//   expect(true).toBe(true)
// })

// test("Renders the main page", () => {
//   render(<App />)
//   expect(true).toBeTruthy()
// })
