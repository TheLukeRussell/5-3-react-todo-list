import React, {Component} from 'react';
class TodoItem extends Component {

  state = {
    todos: []
  }


  handleDelete = () => {
    let index = parseInt(this.props.index);
    this.props.removeItem(index);
}

  handleComplete = () => {
    let index = parseInt(this.props.index);
    this.props.markComplete(index);
  }

  handleEdit = () => {
   let text = (this.props.text);
   this.props.editItem(text);
  };

  render() {
    const isDone = this.props.todo.done ? "done" : "undone";
    return (
      <li>
          <div className={isDone}>
          <span className='todo-task'>
            <i className='fa fa-angle-double-right mr-3'></i>
            {this.props.todo.text}
          </span>
          </div>
          <button
            className='btn btn-info m-1 mt-2'
            onClick={this.handleEdit}
          >
            <i className='fa fa-pencil'></i>
          </button>
          <button
            id='success-btn'
            className='btn btn-success m-1 mt-2'
            onClick={this.handleComplete}
          >
            <i className='fa fa-check'></i>
          </button>
          <button
            className='btn btn-danger m-1 mt-2'
            onClick={this.handleDelete}
          >
            <i className='fa fa-ban'></i>
          </button>
        
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
  const todos = this.props.todos.map(todo => <TodoItem markComplete={this.props.markComplete} editItem={this.props.editItem} removeItem={this.props.removeItem} key={todo.id} text={todo.text} index={todo.id} todo={todo} />);

  return <ul className='list-group'>{todos}</ul>;
};
}

export default TodoList;
