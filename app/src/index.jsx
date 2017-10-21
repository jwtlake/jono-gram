import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  return (
    <div className="hello">
      Who are you?! You shouldn&apos;t be here.
    </div>
  );
};

render(<App />, document.getElementById('root'));
