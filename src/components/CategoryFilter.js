import React, { useState } from "react";
import Button from "./Button";

function CategoryFilter({ categories,onFilter }) {

  const categoryButton = categories.map(category =>{
    return <Button key={category} category={category} onFilter={onFilter} />
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
