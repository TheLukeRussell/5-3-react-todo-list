import React, { Component } from 'react';
import './App.css';

// class TodoForm extends Component{
  // render() {
  //   return(

  //   )
  // }
// }

// let Todolist = (props) => {



  // return (
  //   <ul>{todos}</ul>
  // )

// }

class TodoApp extends Component {

  state = ({
    todos: [

      {id: 0, text: 'Clean my room', isComplete: false},
      {id: 1, text: 'Take out the trash', isComplete: false},
      {id: 2, text: 'Eat diiner', isComplete: false},
      {id: 3, text: 'Play with the puppy dogs', isComplete: false},
      {id: 4, text: 'Go to bed before midnight', isComplete: false},
  ]
  })
  render() {
  return (
    <div className="TodoApp">
      <h1>Stuff I've been putting off</h1>
      {/* <TodoForm /> */}
      {/* <TodoList /> */}
    </div>
  );
}
}

export default TodoApp;
