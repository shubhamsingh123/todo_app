import React, { useState } from "react";

function App() {
  const counting = 1 + 0;
  return (
    <div className="app">
      <h1>TODO: {counting}</h1>
      <input type="text" />
      <button>Add TODO</button>

      <ul>
        <li>Take dog for a walk</li>
        <li>Take a rubbish out</li>
        <li>Study Time</li>
      </ul>
    </div>
  );
}

export default App;
