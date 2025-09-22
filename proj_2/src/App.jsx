import { useState } from 'react';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  let teams=[/*"aston martin", "mercedes", "Red bull", "mclaren", "alpine", "stake sauber", "williams racing", "Ferrari", "Haas", "racing bulls"*/];
  /*if (teams.length==0){
    return <h3>No teams this season</h3>
  }*/
  return (
    <>
      <h1>F1 Teams - 2025</h1>
       {teams.length==0? <h3>No teams this season</h3>: null}  
      <ul class="list-group">
        {teams.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App
