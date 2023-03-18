import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const style = {
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
};

function Button() {
  return (
    <button className={style.button}>
      <IoMdAddCircle size={30} />
    </button>
  );
}

export default Button;
