import React, { Component } from "react";
import { connect } from "react-redux";
import { createTask } from "../actions/taskActions";

class Taskform extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const task = {
      title: this.state.title
    };

    this.props.createTask(task);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Task</label>
          <br></br>
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default connect(null, { createTask })(Taskform);
