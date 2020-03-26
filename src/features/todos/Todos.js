import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, selectTodos } from "./todosSlice";
import styles from "./Todos.module.css";

// onClick={() => dispatch(increment())}
export function Todos() {
  const todos = useSelector(selectTodos);
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <div>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={() => dispatch(addTodo({name: inputValue}))}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <div>{todo.name}</div>
      ))}
    </div>
  );
}
