import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './Profile';
import TicTacToe from './TicTacToe';
import DarkMode from './DarkMode';
import Todo from './Todo';

const App = (props) => {
  return <div className="app">
    <Profile />
    <DarkMode />
    <TicTacToe />
    <Todo />
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
)