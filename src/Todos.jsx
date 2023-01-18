import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import "./Todos.css";
import Cmptodo from "./Cmptodo";
import Form from "./Form";
import Header from "./Header";
import _, { set } from "lodash";

function Todos({ switchTheme }) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [show, setShow] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState({
    addItem: false,
    deleteItem: false,
    editItem: false,
  });

  const link = "https://jsonplaceholder.typicode.com/todos?_limit=20";
  function getApi() {
    axios.get(link).then((res) => {
      setTodos(res.data);
    });
  }
  useEffect(() => {
    getApi();
  }, []);

  function addtodo(todo) {
    if (todo.length) {
      setTodos([...todos, { title: todo, completed: false }]);
      setShow(false);
      setTodo("");
      setIsAlertVisible({addItem:true});
      setTimeout(() => {
      setIsAlertVisible({addItem:false})
      
    },3000);
    } else {
      setShow(true);
    }
  }

  const handleClick =(event) => {
    console.log(event.detail);
    console.log(title)
    switch (event.detail) {
      case 1: {
        console.log('single click');
        break;
      }
      case 2: {
        console.log('double click');
        
        break;
      }
      case 3: {
        console.log('triple click');
        break;
      }
      default: {
        break;
      }
    }
  };
  
  function completedTodo(title) {
    const todo = todos.find((elem) => elem.title == title);

    const newTodos = todos.map((ele) => {
      if (_.isEqual(ele, todo)) {
        ele.completed = !todo.completed;
        return ele;
      }
      return ele;
    });
    setTodos(newTodos);
    console.log(newTodos.filter((e) => e.completed == true).length);
  }

  function DeletTodo(title) {
    const newTodos = todos.filter((todo) => todo.title !== title);
    setTodos(newTodos);
    setIsAlertVisible({deleteItem:true});
    setTimeout(() => {
      setIsAlertVisible({deleteItem:false})
      
    },3000);
  }
  function AlertDelete() {
  
    return(<div className="alert-card">
      <p>The item has been deleted</p>
    </div>)
  }
  function AlertAdd() {
  
    return(<div className="alert-card">
      <p>The item has been added</p>
    </div>)
  }

  return (
    <div className="app-container">
      
      <Header switchTheme={switchTheme} />
      <Form todo={todo} setTodo={setTodo} addtodo={addtodo} show={show} />
      {isAlertVisible.addItem? <AlertAdd/> :""}
      <hr />
      {isAlertVisible.deleteItem? <AlertDelete/> :<p>TO DO</p>}
      <Todo
        handleClick={handleClick}
        data={todos.filter((e) => e.completed == false)}
        completedTodo={completedTodo}
        DeletTodo={DeletTodo}
      />
      <p>COMPLETED</p>
      <Cmptodo
        data={todos.filter((e) => e.completed == true)}
        DeletTodo={DeletTodo}
        completedTodo={completedTodo}
      />
    </div>
  );
}

export default Todos;
