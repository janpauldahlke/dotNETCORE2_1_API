import * as React from 'react';

export interface TodoCreationProps {
  createTodo?: (todo: Todo) => void;
}

export interface TodoCreationState {
  Todo: Todo
}

export default class TodoCreation extends React.Component<TodoCreationProps, TodoCreationState> {

  readonly state = {
    Todo: {
      
    } as Todo
  }

  onchangeValue(e: any) {
    this.setState({
      Todo: {
        ...this.state.Todo,
        [e.target.name] : e.target.value
      } as Todo
    })
  }

  createATodo(todo: Todo) { //this ould be a point to implement a UI store
    if (typeof this.props.createTodo !== 'undefined') {
      this.props.createTodo(todo);
      this.setState({ Todo: { Title: '', Author: '' } as Todo }) 
    } 
  }

  render() {
  
    return (
      <form>
        <h5>create a new Todo here</h5>
        <div className="form-group form-wrapper">
          <label>enter author</label>
          <input
            value={this.state.Todo.Author}
            onChange={this.onchangeValue.bind(this)}
            className="form-control" name="Author" />
          <label>enter title</label>
          <input
            value={this.state.Todo.Title}
            onChange={this.onchangeValue.bind(this)}
            className="form-control" name="Title" />
          <button
            onClick={(e) => {
              e.preventDefault();
              this.createATodo(this.state.Todo);
            }}
            className="btn btn-success">saves</button>
        </div>
     </form>
    )
  }
}