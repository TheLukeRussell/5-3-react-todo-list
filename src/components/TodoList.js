import React, {Component} from 'react';
class TodoItem extends Component {

  state = {
    todos: []
  }

  // handleDelete = (id) => {
  //   console.log('you clicked delete')

  // };

  handleDelete = () => {
    let index = parseInt(this.props.index);
    this.props.removeItem(index);
}

  handleComplete = () => {
    let index = parseInt(this.props.index);
    this.props.markComplete(index);
  }

  // handleComplete = event => {
  //   console.log('you clicked complete');
  // };

  // handleEdit = event => {
  //  
  // };

  render() {
    return (
      <li>
        <div className='row no-gutters'>
          <span className='mr-auto todo-task col-10'>
            <i className='fa fa-angle-double-right col-1'></i>
            {this.props.todo.text}
          </span>
          <button
            className='btn btn-info mr-3 mb-3 mt-3 col'
            onClick={this.handleEdit}
          >
            <i className='fa fa-pencil'></i>
          </button>
          <button
            id='success-btn'
            className='btn btn-success col mt-3 mb-3 mr-3'
            onClick={this.handleComplete}
          >
            <i className='fa fa-check'></i>
          </button>
          <button
            className='btn btn-danger col mt-3 mb-3'
            onClick={this.handleDelete}
          >
            <i className='fa fa-ban'></i>
          </button>
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
  const todos = this.props.todos.map(todo => <TodoItem markComplete={this.props.markComplete} removeItem={this.props.removeItem} key={todo.id} index={todo.id} todo={todo} />);

  return <ul className='list-group'>{todos}</ul>;
};
}

export default TodoList;
