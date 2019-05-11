import React, { Component } from "react";

class CreateTodo extends Component {
  render() {
    return (
      <div>
        <label>add todo</label>
        <input type="text" onChange={event => this.handleChange(event)} />
      </div>
    );
  }
}

export default CreateTodo;
