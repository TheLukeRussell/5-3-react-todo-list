import React, {Component} from 'react';
class TodoItem extends Component {

  state = {
    todos: [],
    isEditing: false,
    text: this.props.todo
  }

  handleDelete = () => {
    this.props.removeItem(this.props.todo);
}

  handleComplete = () => {
  this.props.markComplete(this.props.todo);
  }

  handleEdit = () => {
    this.setState({isEditing: !this.state.isEditing})
  };

  updateTodo = () => {
    this.props.updateTodo(this.props.todo, this.state.text);
    this.handleEdit();
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    // console.log(this.props.todo.isEditing)
    return (
      <div>
      {/* <div><input type = 'text' onChange={this.handleChange} name = 'text'></input></div> */}


      { this.props.todo.isEditing 
        ? 
    
        <span className='todo-task'><i className='fa fa-angle-double-right mr-3'></i><del>{this.props.todo.text}</del></span>
        :
        <span className='todo-task'><i className='fa fa-angle-double-right mr-3'></i>{this.props.todo.text}</span>

      }
      
      
      
      <button className='btn btn-info m-1 mt-2' onClick={this.handleEdit}> <i className='fa fa-pencil'></i></button>
      <button id='success-btn' className='btn btn-success m-1 mt-2' onClick={this.handleComplete}><i className='fa fa-check'></i></button>
      <button className='btn btn-danger m-1 mt-2' onClick={this.handleDelete}><i className='fa fa-ban'></i></button>
      </div>
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
