import React, { Component } from 'react';

class InputTodo extends Component {
  state = { title: '' };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log('hello');
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('please write item');
    }
    // console.log(this.state.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
