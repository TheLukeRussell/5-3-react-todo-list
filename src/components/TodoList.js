import React, {Component} from 'react';
class TodoItem extends Component {

  // state = {
  //   todos: [],
  //   counter,
  //   edit
  // }

  handleDelete = () => {
    let index = parseInt(this.props.index);
    this.props.removeItem(index);
}

  handleComplete = () => {
    let index = parseInt(this.props.index);
    this.props.markComplete(index);
    }

  handleEdit = () => {
   let index = parseInt(this.props.index);
   this.props.editItem(index);
  };
  handleInput = event => {
    let editText = event.target.value;
    // this.setState({editText});
    // console.log(this.handleInput);
  };

  render() {
    const isDone = this.props.todo.done ? "done" : "undone";
    // const isEdit = this.props.todo.edit ? "edit" : "noedit";
    return (
      <li className={isDone}>
          {/* <div className={isDone}> */}
          <span className='todo-task'>
            <i className='fa fa-angle-double-right mr-3'></i>
          {this.props.todo.text}
          </span>
          {/* </div> */}
          <div id='edit-bar'>
          <input
            className='form-control'
            placeholder='Change task to this...'
            type='text'
            name='edit-text'
            id='edit-text'
            // value={this.state.text}
            onChange={this.handleInput}
          />
          </div>
          <button id='edit-btn' className='btn btn-primary ml-3'>Submit</button>
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
