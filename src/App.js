import React, {
  Component
} from 'react';
import TodoForm from './components/TodoForm';
import Header from './trashcan.js'
import TodoList from './components/TodoList';
import './App.css';


class TodoApp extends Component {
  state = {
    todos: [{
        id: 0,
        text: 'Clean my room',
        isEditing: false
      },
      {
        id: 1,
        text: 'Take out the trash',
        isEditing: false
      },
      {
        id: 2,
        text: 'Eat dinner',
        isEditing: false
      },
      {
        id: 3,
        text: 'Play with the puppy dogs',
        isEditing: false
      },
      {
        id: 4,
        text: 'Go to bed before midnight',
        isEditing: false
      },
      {
        id: 5,
        text: 'Grab some dubz with the boys',
        isEditing: false
      }
    ],
    counter: 6,
  };

  addTodo = (todo) => {
    let todos = [...this.state.todos];
    todos.push(todo)

    this.setState({
      todos: todos,
      counter: this.state.counter + 1
    });
  };

  removeItem = (todo) => {
    let todos = [...this.state.todos];
    const index = todos.indexOf(todo)
    console.log(index)
    todos.splice(index, 1);
    this.setState({
      todos:todos
    });
  }

  markComplete = (todo) => {
    console.log(todo)
    let todos = [...this.state.todos]
    const index = todos.indexOf(todo);
    todos[index].isEditing = !todos[index].isEditing
    this.setState({
      todos
    })
    
  }

  editItem = (orig, updated) => {
    let todos = [...this.state.todos];
    const index = todos.indexOf(orig);
    todos[index] = updated
    this.setState({
      todos: todos
    })
  }

  

  render() {

    return (
    <div className='TodoApp'>
      <h1> Stuff I 've been putting off</h1>  
      <TodoForm addTodo = {this.addTodo}/>  
      <TodoList todos = {this.state.todos}
      removeItem = {this.removeItem}
      editItem = {this.editItem} 
      markComplete = {this.markComplete}/>  
      </div>
    );
  }
}

export default TodoApp;