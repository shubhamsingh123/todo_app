import { Button } from "@material-ui/core";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Take dog for a walk",
    "Take a rubbish out",
    "Study Time",
  ]);

  const [input, setInput] = useState("");
  console.log("Hello", input);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const counting = 1 + 0;
  return (
    <div className="app">
      <h1>TODO: {counting}</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Add TODO
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>todo</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
