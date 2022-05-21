import { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataProvider";
import ListItem from "./ListItem";

const List = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [sortType, setSortType] = useState(true)

  const switchComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue;
      }
    });
    setTodos(newTodos);
  };

  const onDCSSortHandler=()=>{
    const newTodos = [...todos];
    newTodos.sort(function(a,b) {
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;

    })
    setTodos(newTodos);
    setSortType(!sortType)
    console.log(newTodos)
  } 

  const onACSSortHandler=()=>{
    const newTodos = [...todos];
    newTodos.sort(function(a,b) {
      if(b.name.toLowerCase() < a.name.toLowerCase()) return -1;

    })
    setTodos(newTodos);
    setSortType(!sortType)
    console.log(newTodos)
  }
  

  return (
    <>
      <button className="tasks" onClick={sortType ? onDCSSortHandler : onACSSortHandler }>
        Tasks
      </button>
      <ul>
        {todos?.map((todo, index) => (
          <ListItem
            todo={todo}
            key={index}
            id={index}
            checkComplete={switchComplete}
            handleEditTodos={handleEditTodos}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
