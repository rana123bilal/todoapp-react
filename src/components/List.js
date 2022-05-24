import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import ListItem from "./ListItem";
import Footer from "./Footer";

const List = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [sortType, setSortType] = useState('DEFAULT')
  const [checkType, setCheckType] = useState(true)

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
      if(b.name.toLowerCase() < a.name.toLowerCase()) return -1;
    })
    setTodos(newTodos);
    setSortType('DSC')
  } 

  const onACSSortHandler=()=>{
    const newTodos = [...todos];
    newTodos.sort(function(a,b) {
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    })
    setTodos(newTodos);
    setSortType('ASC')
  }

  const onDefaultsortHandler=()=>{
    const newTodos = [...todos];
    newTodos.sort(function(a,b) {
      if(a.creationDate < b.creationDate) return -1;
    })
    setTodos(newTodos);
    setSortType('DEFAULT')
  }

  const showAllTodos =  todos ? todos.map((todo, index) => {
   
   
        return <ListItem key={index} todo={todo} id={index} checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
    
    }) : null

 const showUnCheckedTodos =  todos ? todos.map((todo, index) => {
 
        if(todo.complete === false){
          return <ListItem key={index} todo={todo} id={index} checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
        }
      }) : null

  const getCheckedValue = (bool) =>{
    setCheckType(!bool)
    }


  return (
    <>
      <button className="tasks-button" onClick={sortType === 'DEFAULT' ? onACSSortHandler : sortType === 'ASC' ? onDCSSortHandler : onDefaultsortHandler}>
        Tasks
      </button>
      <ul>
{checkType ?  showAllTodos : showUnCheckedTodos}
      </ul>
      <Footer getCheckedValue={getCheckedValue}/>
    </>
  );
};

export default List;