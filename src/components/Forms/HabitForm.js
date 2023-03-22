import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  doc,
  collection,
  addDoc,
  query,
  getDocs,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

import HabitsList from "../Lists/HabitsList";
import Button from "../UI/Button";
import { styleForm } from "../../Style/Style";

function HabitForm() {
  const [habits, setHabits] = useState([]);
  // useState input
  const [input, setInput] = useState("");

  const createHabit = async (e) => {
    e.preventDefault(e);
    // error handling
    if (input === "") {
      return alert("Please enter a valid habit!");
    } else {
      await addDoc(collection(db, "habits"), {
        text: input,
        completed: false,
      });
      setInput("");
    }
  };

  const deleteHabit = async (id) => {
    if (id === undefined) {
      return alert("Habit ID cannot be found!");
    } else {
      await deleteDoc(doc(db, "habits", id));
    }
  };

  useEffect(() => {
    const q = query(collection(db, "habits"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const habitsArr = [];
      querySnapshot.forEach((doc) => {
        habitsArr.push({ ...doc.data(), id: doc.id });
      });
      setHabits(habitsArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={styleForm.habitContainer}>
      <div className={styleForm.container}>
        <h3 className={styleForm.heading}>Action Items - Habits</h3>
        <form onSubmit={createHabit} className={styleForm.form}>
          <input
            className={styleForm.input}
            type="text"
            placeholder="Add Habit"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <Button />
        </form>
        <ul>
          {habits.map((habit, index) => (
            <HabitsList key={index} habit={habit} deleteHabit={deleteHabit} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HabitForm;
