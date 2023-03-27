import React from "react";
import HabitForm from "./components/Forms/HabitForm";
import TodoForm from "./components/Forms/TodoForm";
import { style } from "./Style/Style";

function App() {
  return (
    <>
      <div className={style.bg}>
        <TodoForm />
        <HabitForm />
      </div>
    </>
  );
}

export default App;
