// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {


  return (
    <div className="TodoList">
      {props.data.map(task => {
          // console.log("task:", task)
          return(
        <Todo key={task.id} task={task} toggleTodo={props.toggleTodo} />)
      }
      )
      }
      <button onClick={props.clearTodo}>Clear Completed</button>
    </div>
  );
};
export default TodoList;
