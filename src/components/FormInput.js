import { useState, useContext } from "react";
import { DataContext } from "./DataProvider";
import './todoList.css'


function FormInput(props) {
  const [todos, setTodos] = useContext(DataContext); 
  const [todoName, setTodoName] = useState("");

  const addTodo=(e)=> {
      e.preventDefault();
        setTodos([...todos, {name : todoName , complete : false , creationDate : new Date()}])
      setTodoName('')
      
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={addTodo}>
        <input
          type="text"
          name="todos"
          id="todos"
          placeholder="Add todos"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value.toLowerCase())}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default FormInput;
