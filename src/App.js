import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Todo from "./components/Todo";

const style = {
  bg: `h-screen w-screen p-4`,
};

function App() {
  const [todos, setTodos] = useState(["Learn React", "Work on Algos"]);

  return (
    <div className={style.bg}>
      <div className="container">
        <h3>Action Items</h3>
        <h2>Habits</h2>
        <form className="form">
          <input type="text" placeholder="Add Habit"></input>
          <button className="button">
            <IoMdAddCircle size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
