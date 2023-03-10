import React from "react";

const style = {
  bg: `h-screen w-screen p-4`,
};

function App() {
  return (
    <div className={style.bg}>
      <div className="container">
        <h3>Action Items</h3>
        <h2>Habits</h2>
        <form className="form">
          <input type="text" placeholder="Add Habit"></input>
          <button className="button"></button>
        </form>
      </div>
    </div>
  );
}

export default App;
