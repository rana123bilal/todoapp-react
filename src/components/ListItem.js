import {useState} from "react";
import './todoList.css'

const ListItem = ({todo , id, checkComplete, handleEditTodos}) => {
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)

  const handleOnEdit=()=> {
    setOnEdit(true)
  }

  const handleSave=(id)=> {
    setOnEdit(false)
    if(editValue){
      handleEditTodos(editValue,id)
    }else{
      setEditValue(todo.name)
    }
  }

  if(onEdit){
    return (
      <div>
        <li>
            <input type="text" id='editValue' name='editValue' value={editValue} onChange={e => setEditValue(e.target.value.toLowerCase())}/>
          <button onClick={() => handleSave(id)}>Save</button>
        </li>
      </div>
    );
  }else{
    return (
      <div className={todo.complete ? 'active' : ''}>
        <li >
          <label htmlFor={id} >
            <input type="checkbox" id={id} checked={todo.complete}
            onChange={() => checkComplete(id)} />
            {todo.name}
          </label>
          <button disabled={todo.complete} onClick={handleOnEdit}>Edit</button>
        </li>
      </div>
    );
  }

  
};

export default ListItem;
