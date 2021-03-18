import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Take dog for a walk",
    "Take a rubbish out",
    "Study Time",
  ]);

  const counting = 1 + 0;
  return (
    <div className="app">
      <h1>TODO: {counting}</h1>
      <input type="text" />
      <button>Add TODO</button>

      <ul>
        {todos.map((todo) => (
          <li>todo</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
