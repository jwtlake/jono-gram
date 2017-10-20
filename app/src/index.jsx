import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  return (
    <div className="hello">
      Hello World
    </div>
  );
};

render(<App />, document.getElementById('root'));
