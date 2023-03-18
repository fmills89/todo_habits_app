import React from "react";

function Habits({ habit }) {
  return (
    <li>
      <div>
        <p>{habit}</p>
      </div>
    </li>
  );
}

export default Habits;
