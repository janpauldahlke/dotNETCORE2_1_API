import { connect } from 'react-redux';
import { AppState } from './../AppState';
import TodoView, { TodoViewProps } from '../components_aka_ducks/Todo/TodoView';
import TodosDuck from './../Ducks/TodoDuck';
// is this a wrapping hoc? if so, one should move the action to get all todos, to here



const mapStateToProps=(state: AppState): TodoViewProps=> {
    return {
      Todos:state.Todos
    } as TodoViewProps;
  }

const mapDispatchToProps = (dispatch:any): TodoViewProps => {
    return {
    getTodos:()=>dispatch(TodosDuck.getTodos())
    } as TodoViewProps;
  } 


export default connect(mapStateToProps,mapDispatchToProps)(TodoView);
