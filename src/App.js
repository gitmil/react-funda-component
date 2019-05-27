import React from 'react';
import './App.css';
import NameTag from './components/NameTag';

//create componet NameTag
//you can have nameTag and import it as NameTag. 
//have to have capitalied to diffrenciate between regular html tags
// you can also have arrow function or anon function but its better for testing
//prop or prop children
//fragment for adding lastname
//show react.fragment
// array as fragment
// wrapp it with a tag
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Name List</h1>
        <NameTag firstName="john" lastName="johnson"></NameTag>
        <NameTag firstName="peter" lastName="peterson"></NameTag>
        <NameTag firstName="jill" lastName="jillson"></NameTag>
      </header>
    </div>
  );
}

export default App;
