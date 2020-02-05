import React, {Component} from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li>
        <div className='row no-gutters'>
          <span className='mr-auto todo-task col-10'>
            <i className='fa fa-angle-double-right col-1'></i>
            {this.props.todo.text}
          </span>
          <button className='btn btn-info mr-3 mb-3 mt-3 col'>
            <i className='fa fa-pencil'></i>
          </button>
          <button
            id='success-btn'
            className='btn btn-success col mt-3 mb-3 mr-3'
          >
            <i className='fa fa-check'></i>
          </button>
          <button className='btn btn-danger col mt-3 mb-3'>
            <i className='fa fa-ban'></i>
          </button>
        </div>
      </li>
    );
  }
}

let Todolist = props => {
  const todos = props.todos.map(todo => <TodoItem todo={todo} />);

  return <ul className='list-group'>{todos}</ul>;
};

export default Todolist;
