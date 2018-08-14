/// <reference path="../../containers/TodoCardContainer.ts" />
import * as React from 'react';
//import axios from 'axios';

//import TodoCard from './TodoCard';
import TodoCard from './../../containers/TodoCardContainer';

 
  export interface TodoViewProps {
    getTodos: () => void;
    Todos: Todo[]; 
  }
  export interface TodoViewState{
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
    IsLoaded: false,
    ToDo: this.initalEmptyToDo
  }


  public componentWillMount() {
    this.props.getTodos();
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
      this.props.Todos.length >0 ?
        
        <div className="row">
          <div className="col-12">
              <button className="btn btn-primary">Add a new ToDo</button>
          </div>
         
          <div className="col-6">
            <h1>active: </h1>
            {this.renderTodoCard(this.props.Todos, false)}
          </div>
          <div className="col-6">
            <h1>done:</h1>
            {this.renderTodoCard(this.props.Todos, true)}
          </div>

       </div >
        :
        <div>TodoViewLoading...generating list</div>
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