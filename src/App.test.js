import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

test('SearchBar component renders correctly', () => {
  const { container } = render(<SearchBar />);
  expect(container).toMatchSnapshot();
});
