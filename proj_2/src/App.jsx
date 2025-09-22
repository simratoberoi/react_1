import { useState } from 'react';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  let teams=["aston martin", "mercedes", "Red bull", "mclaren", "alpine", "stake sauber", "williams racing", "Ferrari", "Haas", "racing bulls"];
  return (
    <>
      <h1>F1 Teams - 2025</h1>
      <ul class="list-group">
        {teams.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App
