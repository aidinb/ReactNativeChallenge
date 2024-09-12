/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App'; // Adjust the path as needed

// Import testing utilities
import { render } from '@testing-library/react-native'; // Use @testing-library/react-native for more comprehensive testing

describe('App Component', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});
