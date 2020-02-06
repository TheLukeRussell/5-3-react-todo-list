import React, {Component} from 'react';

class TodoForm extends Component {
  state = {
    text: '',
    isComplete: false
  };

  handleInput = event => {
    let text = event.target.value;
    this.setState({text});
    // console.log(this.handleInput);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    // console.log(this.handleSubmit);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        id='input-form'
        className='row no-gutters'
      >
        <h2 className='col mb-4'>What else do I need to do?</h2>
        <div className='w-100'></div>
        <label className='col-6 offset-3 mb-2' id='todo-title' htmlFor='text'>
          <input
            className='form-control'
            placeholder='Provide your answer here...'
            type='text'
            name='text'
            id='text'
            value={this.state.text}
            onChange={this.handleInput}
          ></input>
        </label>
        <div className='w-100'></div>
        <button className='btn btn-primary col-2 offset-5'>Add a task!</button>
      </form>
    );
  }
}

export default TodoForm;
