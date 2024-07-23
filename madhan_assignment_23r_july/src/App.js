import React from 'react';
import './App.css';
import NameGenderPrediction from './NameGenderPrediction';
import ProductList from './ProductList';
import Gender from './Gender';

function App() {
  return (
    <div className="App">

      <Gender/>

      <h1 className="title">Fake Product Store...</h1>
      <ProductList />
    </div>
  );
}

export default App;
