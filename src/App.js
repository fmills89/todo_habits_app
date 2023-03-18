import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { IoMdAddCircle } from "react-icons/io";
import Todo from "./components/Todo";
import Button from "./components/UI/Button";

const style = {
  bg: `h-screen w-screen p-4`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-6 border border-red-200`,
  habitContainer: `p-4`,
  heading: `text-3xl font-bold, text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  count: `text-center p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      return alert("Please enter a valid To-do!");
    }
    // this will create a db is not already there
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  const deleteTodo = async (id) => {
    // console.log(id);
    // error handling
    if (id === undefined) {
      return alert("Id has not been found!");
    }
    await deleteDoc(doc(db, "todos", id));
  };

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

  // toggling boolean of completed value
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Action Items - Todos</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            className={style.input}
            type="text"
            placeholder="Add Priority Todos"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <Button />
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>You have {todos.length} todos.</p>
        )}
      </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
