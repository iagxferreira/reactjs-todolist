import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoContext from "./contexts/TodoContext";
const App = () => {
  return (
    <TodoContext>
        <Navbar></Navbar>
        <div className="uk-container">
            <TodoList></TodoList>
        </div>
    </TodoContext>
  );
};

export default App;
