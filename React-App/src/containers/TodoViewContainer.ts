import { connect } from 'react-redux';
import { AppState } from './../AppState';
import TodoView, { TodoViewProps } from '../components_aka_ducks/Todo/TodoView';
import TodosDuck from './../Ducks/TodoDuck';

const mapStateToProps = (state: AppState): TodoViewProps => {
  return {
    Todos: state.Todos
  } as TodoViewProps;
};

const mapDispatchToProps = (dispatch: any): TodoViewProps => {
  return {
    getTodos: () => dispatch(TodosDuck.getTodos())
  } as TodoViewProps;
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoView);
