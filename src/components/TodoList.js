import React, {Component} from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className='d-flex justify-content-end mt-3'>
        <span className='mr-auto todo-task'>{this.props.todo.text}</span>
        <button className='btn btn-info mr-1'>
          <i className='fa fa-pencil'></i>
        </button>
        <button id='success-btn' className='btn btn-success mr-1'>
          <i className='fa fa-check'></i>
        </button>
        <button className='btn btn-danger'>
          <i className='fa fa-ban'></i>
        </button>
      </li>
    );
  }
}

let Todolist = props => {
  const todos = props.todos.map(todo => <TodoItem todo={todo} />);

  return <ul className='list-group'>{todos}</ul>;
};

export default Todolist;
