import React, { Component } from "react";

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.complete= {
            newTodoContent: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.makeTodo = this.makeTodo.bind(this);
    }

handleInput(e){
    this.setState({newTodoContent: e.target.value,});
}

makeTodo(){
    this.props.createTodo(this.state.newTodoContent);
    this.setState({newTodoContent: "",});
}
render(){

    return(
        <div className="form">
            <input className="input" placeholder="new todo" value={this.complete.newTodoContent} onChange={this.handleInput} />
            <button className="button" onClick={this.makeTodo}>add todo</button>
        </div>
    )
}
}
export default TodoForm;