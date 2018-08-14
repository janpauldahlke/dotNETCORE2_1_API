import * as React from 'react';
import './ToDoCardStyle.css';

  export interface TodoCardState {
    
  }
export interface TodoCardProps {
  deleteTodo?: () => void;
  updateTodoStatus?: () => void;
  Todo: Todo;
}


export default class TodoCard extends React.Component<TodoCardProps, TodoCardState> {


  updateStatusToDone(): void {
    //triggers update
    if (typeof this.props.updateTodoStatus !== 'undefined') {
      this.props.updateTodoStatus();
    }
  }

  deleteATodo(): void {
    if (typeof this.props.deleteTodo !== 'undefined') {
      this.props.deleteTodo();
    }
  }
  
  render() {
  
    return (
      this.props.Todo ?
        <div className="todo-card row">
          <div className="col-8">
            <p>{this.props.Todo.Author}</p>
            <p>{this.props.Todo.Title}</p>
            <p>{this.props.Todo.IsCompleted.toString()}</p>
          </div>
          <div className="col-3">
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                this.updateStatusToDone()
              }}>{!this.props.Todo.IsCompleted ? "set to done " : "do it again"}</button>
            <button
              className="btn btn-warning"
              onClick={(e) => {
                e.preventDefault();
                this.deleteATodo();
                }}>delete</button>
          </div>
        </div> :
        <div>is not there </div>
    );
  }
}