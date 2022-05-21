import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import List from "./components/List";
import DataProvider from "./components/DataProvider";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [showRegister, setShowRegister] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showTodoList, setShowTodoList] = useState(false)
console.log('showRegister', showRegister)

  return (
    <>
      {!showLogin && !showTodoList  && <Register setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>}
      {showLogin && <Login setShowTodoList={setShowTodoList} setShowLogin={setShowLogin} />}
      <DataProvider>
      {showTodoList && !showLogin && !showRegister && <div className="App">
          <h1>Todo List</h1>
          <FormInput />
          <List />
          <Footer />
        </div>}
      </DataProvider>
    </>
  );
}

export default App;
