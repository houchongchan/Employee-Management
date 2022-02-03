import React from 'react';
import TableContainer from './components/TableContainer';
import InputField from './components/InputField';
import {Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Container fluid>
      <header className="App-header">
        <InputField />
        <TableContainer />
      </header>
    </Container>
  );
}

export default App;
