import React,{useState} from "react";

function Button( {category,onFilter}) {
    const [selected, setSelected] = useState('')

    function handleFilterClick(e){
        if (!selected){
          e.target.className = 'selected'
        } else {
          e.target.className = ''
        }
        setSelected(e.target.className)
        onFilter(e.target.innerText)
      }

    return <button className={selected} name={category} onClick={handleFilterClick}>{category}</button>

}

export default Button