import React from "react";
import { style } from "../../Style/Style";
import { FaRegTrashAlt } from "react-icons/fa";

function Habits({ habit, toggleComplete, deleteHabit }) {
  return (
    <li className={habit.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(habit)}
          type="checkbox"
          checked={habit.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(habit)}
          className={habit.completed ? style.textComplete : style.text}
        >
          {habit.text}
        </p>
      </div>
      <button onClick={() => deleteHabit(habit.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
}

export default Habits;
