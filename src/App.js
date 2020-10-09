import React from 'react';

import classNames from './App.module.css';
import Blog from './containers/Blog/Blog';

function App() {
  return (
      <div className={classNames.App}>
        <Blog />
      </div>
  );
}

export default App;
