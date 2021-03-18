import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

function Todo({ text }) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={text} secndary="todo" />
      </ListItem>
    </List>
  );
}

export default Todo;
