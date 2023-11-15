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

  function onFilter(categories) {
    if(!filters.includes(categories)){
      setFilters([...filters, categories])
    } else if(filters.includes(categories)){
      setFilters(filters.filter((filter)=> filter !== categories))
    } 
    
  }
  
  useEffect(()=>{
    if (filters.length === 0 || filters.includes("All")){
      setTasks(rootTasks)
    } else {
      const updatedTasks = rootTasks.filter((task) => {
        if(filters.includes(task.category)){
          return true
        }
      })
      setTasks(updatedTasks)
    }
    
  },[filters, rootTasks])

  function onTaskFormSubmit(newTask){
    setRootTasks([...rootTasks,newTask])
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
