import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ setData, data }) {
  const [todo, setTodo] = useState("");
  function handlechange(e) {
    setTodo(e.target.value);
  }
  function handleClick() {
    if (todo != "") {
      setData((prev) => [...prev, todo]);
    } else {
      alert("please enter somethoing ");
    }
    setTodo("");
  }
  function delToDo(i) {
    let filterdData = data.filter((val, index) => index != i);
    setData(filterdData);
  }
  function editToDo(i) {
    let editable = data.slice(i, 1);
    setTodo(editable);
    delToDo(i);
  }

  return (
    <>
      <div className="todolist-container">
        <div>
          <input
            className="input"
            type="text"
            value={todo}
            onChange={(e) => handlechange(e)}
          />
          <button onClick={handleClick}>ADD</button>
        </div>
        <div className="todolist">
          {data.map((val, i) => {
            return (
              <ToDoItem
                key={crypto.randomUUID()}
                index={i + 1}
                todoval={val}
                delToDo={() => delToDo(i)}
                editToDo={() => editToDo(i)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ToDoList;
