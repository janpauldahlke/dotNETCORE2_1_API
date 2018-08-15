/// <reference path="../../containers/TodoCardContainer.ts" />
import * as React from 'react';
import Portal from '@material-ui/core/Portal';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import './TodoCreation.css';

import TodoCard from './../../containers/TodoCardContainer';
import TodoCreationContainer from './../../containers/TodoCreationContainer';

 
  export interface TodoViewProps {
    getTodos: () => void;
    Todos: Todo[]; 
  }
export interface TodoViewState{
    showCreationDialog: boolean
    //IsLoaded: boolean,
    //ToDo: Todo[],
  }
 

export default class TodoView extends React.Component<TodoViewProps, TodoViewState>{

  readonly initalEmptyToDo : Todo[] = [
    {
        Id: 0,
        Title: "",
        Author: "",
        IsCompleted: false
    }
  ]
  
  //inits empty state
  readonly state = {
    //IsLoaded: false,
    //ToDo: this.initalEmptyToDo,
    showCreationDialog: false
  }


  public componentWillMount() {
    this.props.getTodos();
  }

  //functions
  createANewTodo() {
    this.setState({ showCreationDialog: !this.state.showCreationDialog });
  }

  //renderHelper

  renderTodoCard(todo: Todo[], completed : boolean): JSX.Element[]{
    //console.log('renderToCard', todo)
    return todo.map((singleToDo: Todo) => {
      if (completed && singleToDo.IsCompleted) {
        return <TodoCard Todo={singleToDo} key={singleToDo.Id} />
      } else if(!completed && !singleToDo.IsCompleted) {
        return <TodoCard Todo={singleToDo} key={singleToDo.Id} />
      }
      // this needs rework! prevent the render of the empty div
      return <div key={Math.floor(Math.random() * 1000)}></div>
    });
  }
  
   //render stuff
  render(): JSX.Element{
  
    return (
      <div className="container">
        <div className="row card">
          <button
            onClick={(e) => {
              e.preventDefault();
              this.createANewTodo()
            }}
            className="btn btn-primary">create  new todo</button>
          {this.state.showCreationDialog &&
            <Portal>
            <div className="lightbox">
            <ClickAwayListener onClickAway={() => {
              console.log('triggered onClickAway')
              this.setState({ showCreationDialog: !this.state.showCreationDialog })
            }}>
                <TodoCreationContainer />
               </ClickAwayListener >
            </div>
            </Portal>}
        </div>
        {this.props.Todos.length > 0 &&
          <div className="row">
            <div className="col-6">
              <h1>active: </h1>
              {this.renderTodoCard(this.props.Todos, false)}
            </div>
            <div className="col-6">
              <h1>done:</h1>
              {this.renderTodoCard(this.props.Todos, true)}
            </div>
          </div >
        }
      </div>
        
    );
  
  }
}

/* think about your CRUD here for a moment
 * 
 * anything related to crud the Todos should happen here
 * 2 lanes todo, is done by order
 * clicking on open todos can set them to done lane
 * clicking add button, renders a add toview, thats also updates the store
 * implement an store later on, for now it could be a react only app
 */