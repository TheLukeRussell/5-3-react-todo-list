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
    ],
    counter: 6
  };

  addTodo = todo => {
    todo.id = this.state.counter;
    todo.isComplete = false;

    let todos = this.state.todos.slice();
    todos.unshift(todo);
    console.log('todo', todo);

    this.setState({
      todos: todos,
      counter: this.state.counter + 1
    });
  };

  removeItem = (id) => {
        const {todos} = this.state;
        todos.splice(id, 1);
        this.setState({
            todos: todos
        });
    }


  markComplete = (id) => {
    const {todos} = this.state;
    const todo = todos[id];
    todos.splice(0, todo);
    todo.isComplete = true;
    todo.done = !todo.done;
    this.setState({
      todos
    })
  }

  editItem = (text) => {
    const {todos} = this.state;
    console.log(text)
  }

  render() {

    return (
      <div className='TodoApp'>
        <h1>Stuff I've been putting off</h1>
        <TodoForm addTodo={this.addTodo}  />
        <TodoList todos={this.state.todos} removeItem={this.removeItem} editItem={this.editItem} markComplete ={this.markComplete} />
      </div>
    );
  }
}

export default TodoApp;
