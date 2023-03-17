import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { IoMdAddCircle } from "react-icons/io";
import Todo from "./components/Todo";

const style = {
  bg: `h-screen w-screen p-4`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl, p-4`,
  heading: `text-3xl font-bold, text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-3xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // defining a path for our database
    const q = query(collection(db, "todos"));
    // using onSnapShot reads the database
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Action Items</h3>
        <form className={style.form}>
          <input
            className={style.input}
            type="text"
            placeholder="Add Habit"
          ></input>
          <button className={style.button}>
            <IoMdAddCircle size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} />
          ))}
        </ul>
        <p className={style.count}>You have two todos.</p>
      </div>
    </div>
  );
}

export default App;
