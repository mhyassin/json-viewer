import React from 'react';
import JsonData from './components/JsonData';
import './App.css';
import data from './utils/json-data.json';

function App() {
  return (
    <div className="App">
      <JsonData data={data} />
    </div>
  );
}

export default App;
