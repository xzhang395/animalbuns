import React from 'react';
import './App.css';

import Intro from "./Intro.js";
import Gallery from "./Gallery.js";
import Ideas from "./Ideas.js";

function App() {
  return (
    <div className="App">
      <div className="wide-left" >
        <div className="half-box-style" >
          <Intro />
          <Ideas />
        </div>
      </div>
      <div className="wide-right" >
        <div className="half-box-style" >
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
