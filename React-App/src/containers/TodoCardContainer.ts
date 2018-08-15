import { connect } from 'react-redux';
import { AppState } from './../AppState';
import TodoCard, { TodoCardProps } from '../components_aka_ducks/Todo/TodoCard';
import TodosDuck from './../Ducks/TodoDuck';

export class TodoCardContainer {

  public static mapStateToProps(state: AppState): TodoCardProps {
    return {} as TodoCardProps;
  }

  public static mapDispatchToProps(dispatch: any, ownprops: TodoCardProps): TodoCardProps {
    return {
      deleteTodo: () => dispatch(TodosDuck.deleteTodoById(ownprops.Todo.Id)),
      updateTodoStatus: () => dispatch(TodosDuck.updateTodoStatusById(ownprops.Todo.Id, ownprops.Todo)),

    } as TodoCardProps;
  }
}

export default connect(TodoCardContainer.mapStateToProps, TodoCardContainer.mapDispatchToProps)(TodoCard);