import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Take dog for a walk",
    "Take a rubbish out",
    "Study Time",
  ]);

  const [input, setInput] = useState("");
  console.log("Hello", input);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
  };

  const counting = 1 + 0;
  return (
    <div className="app">
      <h1>TODO: {counting}</h1>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
      />
      <button onClick={addTodo}>Add TODO</button>

      <ul>
        {todos.map((todo) => (
          <li>todo</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
