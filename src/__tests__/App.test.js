import React from 'react';
import App from '../App';
import { renderWithRedux } from '../redux/renderWithRedux';

test('renders the title', () => {
  const wrapper = renderWithRedux(<App/>);
  const titleElement = wrapper.getByText(/todo list/i);
  expect(titleElement).toBeInTheDocument();
});
