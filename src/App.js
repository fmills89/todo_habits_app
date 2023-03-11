import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Todo from "./components/Todo";

const style = {
  bg: `h-screen w-screen p-4`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl, p-4`,
  heading: `text-3xl font-bold, text-center text-gray-800 p-2`,
};

function App() {
  const [todos, setTodos] = useState(["Learn React", "Work on Algos"]);

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Action Items</h3>
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
        <p className={style.count}>You have two todos.</p>
      </div>
    </div>
  );
}

export default App;
