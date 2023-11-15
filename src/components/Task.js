import React from "react";

function Task({ text,category,onHandleDelete }) {

  function handleDelete(e){
    onHandleDelete(e.target.value)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} value={text} className="delete">X</button>
    </div>
  );
}

export default Task;
