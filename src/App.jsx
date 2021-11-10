import React from 'react';
import styled from 'styled-components';
import { Root } from './store';
import './App.css';
import Routes from './routes';

const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #222;
`;

const App = () => (
  <Background>
    <Root>
      <Routes />
    </Root>
  </Background>
);

export default App;
