import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

const Footer = (props) => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = (e) => {
    const checks = e.target.checked;
    props.getCheckedValue(checks);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(newTodos);
    if (checkAll) {
      localStorage.clear();
    }
    setCheckAll(false);
  };

  return (
    <>
      {todos?.length === 0 ? (
        <h2>Congratulations! Nothing to do</h2>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckAll}
            />
            Hide Completed
          </label>
          <p>
            You have {todos?.filter((todo) => todo.complete === false).length}{" "}
            todo
          </p>
          <button id="delete" onClick={deleteTodo}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;
