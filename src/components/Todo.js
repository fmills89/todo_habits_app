import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {};

function Todo({ todo }) {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" checked />
        <p className={style.text}>{todo}</p>
        <button>{<FaRegTrashAlt />}</button>
      </div>
    </li>
  );
}

export default Todo;
