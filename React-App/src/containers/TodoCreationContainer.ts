import { connect } from 'react-redux';
import { AppState } from './../AppState';
import TodoCreation, { TodoCreationProps } from '../components_aka_ducks/Todo/TodoCreation';
import TodosDuck from './../Ducks/TodoDuck';



const mapStateToProps = (state: AppState): TodoCreationProps => {
  return {
    
  } as TodoCreationProps;
}

const mapDispatchToProps = (dispatch: any ): TodoCreationProps => {
  return {
    createTodo: (todo: Todo) => {
      dispatch(TodosDuck.createTodo(todo))
    }
  } as TodoCreationProps
}

export default connect<TodoCreationProps, TodoCreationProps, TodoCreationProps>(mapStateToProps, mapDispatchToProps)(TodoCreation);