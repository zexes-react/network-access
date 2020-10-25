import React from 'react';

import classNames from './App.module.css';
import Blog from './containers/Blog/Blog';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
      // BrowserRouter enables routing to be used anywhere in the in the wrapped component e.g Blog
      <BrowserRouter>
          <div className={classNames.App}>
              <Blog />
          </div>
      </BrowserRouter>

  );
}

export default App;
