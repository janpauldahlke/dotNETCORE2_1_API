import { Action } from "redux";
import axios, { AxiosInstance } from 'axios';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from './../AppState';
//import { cloneDeep } from 'lodash';


/*--------------------------------------------------------------------------------------------------------
 * 
 * my first duck!! ;-)
 
 >(.)__ <(.)__ =(.)__
  (___/  (___/  (___/
--------------------------------------------------------------------------------------------------------*/
//axios instance helper
function createAxiosInstance(): AxiosInstance {
  const baseURL = 'http://localhost:4400';
  return axios.create({
    baseURL,
    timeout: 5000,
    // example for jwt or any other auth in the header
    //headers: {
    //  "some-auth" : 
    //}
  })
}

//Actions go here as pretty new TS feautre enums!!
enum TodoActions {
  GET_ALL_TODOS = 'GET_ALL_TODOS',
  GET_TODO_BY_ID = 'GET_TODO_BY_ID',
  DELETE_TO_BY_ID = 'DELETE_TO_BY_ID',
  UPDATE_STATUS_BY_ID = 'UPDATE_STATUS_BY_ID',
}

type getAllTodosActionType = { type: string, Todos: Todo[] };
type getTodoByID = { type: string, Todo: Todo };
type deleteTodoByIdActionType = { type: string, id: number }; // del should return the new array? at least it should be removed from the redux store
type updateStatusByIdActionType = { type: string, id: number, todo: Todo}


export default class TodosDuck {
 
// Actions Creators
  public static getTodosAction = (Todos: Todo[]): getAllTodosActionType => ({
    type: TodoActions.GET_ALL_TODOS,
    Todos
  });

  public static getTodoByIdAction = (Todo: Todo): getTodoByID => ({
    type: TodoActions.GET_TODO_BY_ID,
    Todo
  });

  public static deleteTodoByIdAction = (id: number): deleteTodoByIdActionType => ({
    type: TodoActions.DELETE_TO_BY_ID,
    id
  })

  public static updateStatusByIdAction = (id: number, todo: Todo): updateStatusByIdActionType => ({
    type: TodoActions.UPDATE_STATUS_BY_ID,
    id,
    todo,
  })
  
// Thunk


  public static getTodos() {  
    return (dispatch: ThunkDispatch<AppState, void, getAllTodosActionType>) => {
      createAxiosInstance().get('api/todo')
        .then((res) => {
          dispatch(TodosDuck.getTodosAction(res.data as Todo[]));
        })
        .catch((err) => console.log(err))
    }    
  }

  public static getTodoById(id: number) {
    return (dispatch: ThunkDispatch <AppState, void, getTodoByID>) => {
      const url = '/api/todo'
      const parametrizedUrl = `${url}/${id}`;
      createAxiosInstance().get(parametrizedUrl)
        .then((res) => TodosDuck.getTodoByIdAction(res.data as Todo))
        .catch((err) => console.log(err));
    }
  }

  public static deleteTodoById(id: number) {
    return (dispatch: ThunkDispatch<AppState, void, deleteTodoByIdActionType>) => {
      const url = '/api/todo'
      const parametrizedUrl = `${url}/${id}`;
      createAxiosInstance().delete(parametrizedUrl)
        .then((res) => {
          dispatch(TodosDuck.deleteTodoByIdAction(id));
        })
        .catch((err) => console.log(err))
    }
  }

  public static updateTodoStatusById(id: number, todo: Todo) {
    return (dispatch: any) => {
      const url = '/api/todo'
      const parametrizedUrl = `${url}/${id}`;
      let newTodo: Todo = Object.assign({}, todo)
      newTodo.IsCompleted = !todo.IsCompleted
      createAxiosInstance().put(parametrizedUrl, newTodo)
        .then((res) => {
          dispatch(TodosDuck.updateStatusByIdAction(id, todo));
        }).catch((err) => console.log(err))
    }
  }
 

// Reducer

  public static reducer = (state: Todo[] = [], action: Action<any>):Todo[] => {

    switch (action.type) {
      case TodoActions.GET_ALL_TODOS:
        return TodosDuck.getAllTodosReducerFunction(state, action as getAllTodosActionType);
      case TodoActions.GET_TODO_BY_ID:
        return state;
      case TodoActions.DELETE_TO_BY_ID:
        return TodosDuck.deleteTodoByIdReducerFunction(state, action as deleteTodoByIdActionType);
      case TodoActions.UPDATE_STATUS_BY_ID:
        return TodosDuck.updateTodoByIdReducerFunction(state, action as updateStatusByIdActionType);
      default:
        return state;
    } 
  }

  // double check the workding convention here on this one
  public static getAllTodosReducerFunction(state: Todo[] = [], action: getAllTodosActionType):Todo[] { 
    return action.Todos;
  }

  public static getTodoByIdReducerFunction(state: Todo[] = [], action: getTodoByID): Todo[] {
    const newState = Object.assign({}, state);  // do we need this really? i think its unnesessary. my english omg!!!
    newState.push(action.Todo);
    return newState;
  }

  public static deleteTodoByIdReducerFunction(state: Todo[], action: deleteTodoByIdActionType): Todo[] {
    return state.filter((todo: Todo) => { return todo.Id !== action.id });
  }

  public static updateTodoByIdReducerFunction(state: Todo[], action: updateStatusByIdActionType): Todo[] {

    let newState = [...state];
    
    newState.find((el: Todo) => {
      if (el.Id === action.todo.Id) {
        return el.IsCompleted = !action.todo.IsCompleted
      } else {
        return false
      }
    });

    return newState;
  }
}