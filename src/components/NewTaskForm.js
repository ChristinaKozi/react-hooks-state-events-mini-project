import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";

function NewTaskForm({ categories,onTaskFormSubmit }) {
  const [details, setDetails] = useState('')
  const [category, setCategories ] = useState('')

  const options = categories.filter(category => category !== 'All')

  function handleSubmit(e){
    e.preventDefault()
    const newTask = {
      text: details,
      category: category
    }
    onTaskFormSubmit(newTask)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={details} 
          onChange={(e)=>setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>setCategories(e.target.value)}>
          {options.map(option => {
          return <option key={option} value={option}>{option}</option>})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
