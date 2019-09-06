import React from 'react';
import { shallow } from 'enzyme';
import PolicyResults from './PolicyResults';

it('renders without crashing', () => {
  shallow(
    <PolicyResults 
      searchValue={''}
      policies={[]} 
    />
  );
});