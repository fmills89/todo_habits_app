import React, { useState, useEffect } from "react";
import TodoForm from "./components/Forms/TodoForm";

function App() {
  return (
    <>
      <TodoForm />
      {/* <div className={style.bg}>
        <div className={style.habitContainer}>
          <div className={style.container}>
            <h3 className={style.heading}>Action Items - Habits</h3>
            <form className={style.form}>
              <input
                className={style.input}
                type="text"
                placeholder="Add Habit"
              ></input>
              <Button />
            </form>
            <ul>
              {habits.map((habit, index) => (
                <Habits key={index} habit={habit} />
              ))}
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
