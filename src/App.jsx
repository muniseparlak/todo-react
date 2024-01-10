import { useState } from "react";
import { ToDoForm } from "./components/ToDoForm";
import {List} from './components/List'
import './App.css'

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addToDo = (e) => {
    e.preventDefault();
    if (todoInput !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <ToDoForm
        addToDo={addToDo}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
      />
     <List
      todos={todos}
      todoInput={todoInput}
      removeTodo={removeTodo}
     />
    </div>
  );
}

export default App;
