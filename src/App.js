import React from "react";
import TodoForm from "./components/TodoForm"
import data from "./components/data";
import TodoList from "./components/TodoList";
import "./components/Todo.css"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  addTask = (e, task)=>{
    e.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newTask]
    });
  }


  toggleTodo = taskId => {
    this.setState({
      data: this.state.data.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };


  clearTodo = event => {
    event.preventDefault();
    this.setState({
      data: this.state.data.filter(task => !task.completed)
    });
  }

  render() {
    return (
      <div className = "App">
        <div className = "header">
          <h2>Todo List!</h2>
          <TodoForm
          addTask = {this.addTask}/>
        </div>
        <TodoList
        data = {this.state.data}
        toggleTodo = {this.toggleTodo}
        clearTodo = {this.clearTodo}/>
      </div>
    );
  }
}

export default App;
