import React, {Component} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class TodoApp extends Component {
  state = {
    todos: [
      {id: 0, text: 'Clean my room', isComplete: false},
      {id: 1, text: 'Take out the trash', isComplete: false},
      {id: 2, text: 'Eat dinner', isComplete: false},
      {id: 3, text: 'Play with the puppy dogs', isComplete: false},
      {id: 4, text: 'Go to bed before midnight', isComplete: false},
      {id: 5, text: 'Grab some dubz with the boys', isComplete: false}
    ]
  };

  addTodo = todo => {
    todo.id = this.state.counter;
    todo.isComplete = false;

    let todos = this.state.todos.slice();
    todos.unshift(todo);

    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className='TodoApp'>
        <h1>Stuff I've been putting off</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default TodoApp;
