import React from 'react';
import ReactDOM from 'react-dom';
import PolicyResults from './PolicyResults';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PolicyResults 
      searchValue={''}
      policies={[]} 
    />, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
