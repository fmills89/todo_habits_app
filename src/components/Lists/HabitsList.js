import React from "react";
import { style } from "../../Style/Style";
import { FaRegTrashAlt } from "react-icons/fa";

function Habits({ habit, toggleComplete, deleteHabit }) {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}>{habit.text}</p>
      </div>
      <button onClick={() => deleteHabit(habit.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
}

export default Habits;
