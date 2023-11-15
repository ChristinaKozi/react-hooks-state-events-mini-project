import React,{ useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [rootTasks, setRootTasks] = useState(TASKS)
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [filters , setFilters] = useState([])

  function onHandleDelete(text) {
    const updatedTasks = rootTasks.filter(task => task.text !== text)
    setRootTasks(updatedTasks)
  }

  function onFilter(category) {
    if (!category) {
      setFilters([]);
    } else if (!filters.includes(category)) {
      setFilters([...filters, category]);
    } else if (filters.includes(category)) {
      setFilters(filters.filter((filter) => filter !== category));
    }
  }
  
  useEffect(()=>{
    if (filters.length === 0 || filters.includes("All")){
      setTasks(rootTasks)
    } else {
      const updatedTasks = rootTasks.filter((task) => filters.includes(task.category));
      setTasks(updatedTasks)
    }
  },[filters, rootTasks])

  function onTaskFormSubmit(newTask){
    setRootTasks((prevRootTasks) => [...prevRootTasks, newTask]);
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onFilter={onFilter} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} onHandleDelete={onHandleDelete}/>
    </div>
  );
}

export default App;
