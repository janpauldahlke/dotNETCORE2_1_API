 import {combineReducers } from 'redux';
import TodosDuck from './Ducks/TodoDuck';
export class AppState {

  public Todos: Todo[];


}


export class AppStateInit {
  public static getInitialState(): AppState {
    const state: AppState = { Todos: [] };  


    return state;
  }  
}


export const rootReducer = combineReducers({
  Todos: TodosDuck.reducer
});