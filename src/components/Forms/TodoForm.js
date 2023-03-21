import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import TodoList from "../Lists/TodoList";
import { styleForm } from "../../Style/Style";
import Button from "../UI/Button";

function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //createTodo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      return alert("Please enter a valid Todo!");
    } else {
      await addDoc(collection(db, "todos"), {
        text: input,
        completed: false,
      });
      setInput("");
    }
  };

  const deleteTodo = async (id) => {
    if (id === undefined) {
      return alert("Id has not been found!");
    }
    await deleteDoc(doc(db, "todos", id));
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));

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
    <div className={styleForm.container}>
      <h3 className={styleForm.heading}>Action Items - Todos</h3>
      <form onSubmit={createTodo} className={styleForm.form}>
        <input
          className={styleForm.input}
          type="text"
          placeholder="Add Priority Todos"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <Button />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
      {todos.length < 1 ? null : (
        <p className={styleForm.count}>You have {todos.length} todos.</p>
      )}
    </div>
  );
}

export default TodoForm;
