import React from 'react';
import './App.css';

import Basket from './Basket'

function App() {
  return (
    <div className="App">
      <h2>Welcome to the P1 CSA [digital]</h2>
      <section>
        <Basket name={`green machine`} price={18.25} items={[{type: "fruit", name: "kiwi", origin: "New Zealand"}, {type: "fruit", name: "fuji apple", origin: "USA"}]}/>
        <Basket name={"carrot ferret"} price={15.50} items={['carrot', 'prunes', 'dates']}/>
      </section>
    </div>
  );
}

export default App;