import React, { Component } from "react";
import "./App.css";
import TodoForm from "./TodoForm"
import todoList from "./TodoList/todolist"
import firebase from "firebase";
import firebaseConfig from "./Config";

class App extends Component{
  constructor(props){
    super(props);
    this.createTodo = this.createTodo.bind(this);
    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref().child("todo");
    this.complete = {
      todo: []
    };
  }

  componentWillMount(){
    const previous = this.complete.todo;
    this.database.on("add", (snap) => { previous.push({id: snap.key, todoContent: snap.val().todoContent,});

    this.setState({todo: previous,});
  });

  }

  createTodo(todo){

    this.database.push().set({todoContent: todo})
  }
  render(){
    return(
      <div className="wrapper">
        <div className="header">
          <div className="heading">
            ToDo List
          </div>
          </div>
          <div className="body">
            {this.state.todo.map((todo)=>{return(<TodoList todoContent={todo.todoContent} TodoListId={todo.id} key={todo.id}/>);})}
            </div>
            <div className="footer">
              <TodoForm createTodo={this.createTodo} />
            </div>
          </div>
    )
  }
}
export default App