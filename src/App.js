import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/style.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Input from "./components/Input";
import Login from "./components/pages/Login";
import uuid from "uuid";
import Splash from "./components/pages/Splash";
import Deleted from "./components/pages/Deleted";
import TaskProvider from "./Context";
import ProgressBar from "./components/pages/ProgressBar";
import 'react-bootstrap';



const App = () => {
  const [tasks, setTasks] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const addToDo = (task) => {
    const newTodo = {
      key: uuid.v4(),
      newTask: task.title,
      details: task.details,
    };
    const newArr = [newTodo, ...tasks];
    setTasks(newArr);
  };

  

  const finalDel = (id) => {
    const delArr = [...deleted.filter((task) => task.key !== id)];
    setDeleted(delArr);
  };

  return (
    <Router >
      <Header />
      <Route exact path={process.env.PUBLIC_URL + "/"} />
      <TaskProvider>
        <Route exact path="/progressbar" component={ProgressBar} />
      </TaskProvider>
      <Route exact path="/" component={Splash} />
      <Route path="/tasks">
        <div className="container appCont">
          <TaskProvider>
            <Input addtodo={addToDo} />
          </TaskProvider>
        </div>
      </Route>
      <Route path="/login">
        <div className="container appCont">
          <Login />
        </div>
      </Route>
      <div className="container contApp">
        <Route path="/tasklist">
          <Deleted deleted={deleted} finalDel={finalDel} />
        </Route>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
