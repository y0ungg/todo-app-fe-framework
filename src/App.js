import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border-radius: 50px;
  border: none;
  padding: 0.5em;
  font-size: 0.5em;
  background-color: skyblue;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    setCount((c) => c + 1);
  };
  const onClickMinus = () => {
    setCount((c) => c - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Btn onClick={onClickPlus}>+</Btn>
        {count}
        <Btn onClick={onClickMinus}>-</Btn>
      </header>
    </div>
  );
}

export default App;
