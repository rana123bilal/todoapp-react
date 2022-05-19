import {useContext} from 'react';
import { DataContext } from './DataProvider';
import ListItem from './ListItem';

const List = () => {

    const [todos , setTodos] = useContext(DataContext)
    console.log(todos)

    const switchComplete=(id)=>{
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if(index === id){
                todo.complete = ! todo.complete
            }
        })
        setTodos(newTodos)
    }


    return (
        <ul>
       {todos.map((todo , index) => (
           <ListItem todo={todo} key={index} id={index}
           checkComplete={switchComplete} />
       ))}
      </ul>
    );
};

export default List;