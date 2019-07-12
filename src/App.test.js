// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

import expect from 'expect';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders without crashing', () => {
  const x1 = 1;
  const x2 = 3;
  expect(x1 + x2).toBe(4);
});

// docker exec -it e1365fe95e07 npm run test
// to run tests