import * as React from 'react';

export interface TodoCreationProps {
  createTodo?: (todo: Todo) => void;
  close?: () => void;
}

export interface TodoCreationState {
  Todo: Todo;
}

export default class TodoCreation extends React.Component<TodoCreationProps, TodoCreationState> {

  readonly state = {
    Todo: {

    } as Todo
  };

  onchangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      Todo: {
        ...this.state.Todo,
        [e.target.name]: e.target.value
      } as Todo
    });
  }

  createATodo(todo: Todo) { //this ould be a point to implement a UI store
    if (typeof this.props.createTodo !== 'undefined') {
      this.props.createTodo(todo);
      this.setState({ Todo: { Title: '', Author: '' } as Todo });
    }
  }
  
  public render(): JSX.Element {

    return (
      <form>
        <div className="form-group form-wrapper">
          <label>enter author</label>
          <input
            defaultValue={this.state.Todo.Author}
            onChange={this.onchangeValue.bind(this)}
            className="form-control" name="Author" />
          <label>enter title</label>
          <input
            defaultValue={this.state.Todo.Title}
            onChange={this.onchangeValue.bind(this)}
            className="form-control" name="Title" />
          <button
            onClick={(e) => {
              e.preventDefault();
              this.createATodo(this.state.Todo);
              if (typeof this.props.close !== 'undefined') {
                this.props.close();
              }
            }}
            className="btn btn-success">saves</button>
        </div>
      </form>
    );
  }
}