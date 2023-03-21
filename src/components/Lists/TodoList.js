import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { style } from "../../Style/Style";

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      {/* todo.id is autogenereated */}
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
}

export default Todo;
