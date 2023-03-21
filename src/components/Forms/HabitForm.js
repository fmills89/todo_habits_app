import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

import HabitsList from "../Lists/HabitsList";
import Button from "../UI/Button";
import { styleForm } from "../../Style/Style";

function HabitForm() {
  const [habits, setHabits] = useState(["Learn react", "Duolingo once a day"]);
  // useState input
  const [input, setInput] = useState("");
  console.log(input);

  const createHabit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={styleForm.habitContainer}>
      <div className={styleForm.container}>
        <h3 className={styleForm.heading}>Action Items - Habits</h3>
        <form className={styleForm.form}>
          <input
            className={styleForm.input}
            type="text"
            placeholder="Add Habit"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <Button />
        </form>
        <ul>
          {habits.map((habit, index) => (
            <HabitsList key={index} habit={habit} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HabitForm;
