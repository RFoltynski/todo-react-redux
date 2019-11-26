import React, { Component } from "react";

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
  render() {
    return (
      <div>
        <form onSubmit="Submit">
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
export default Taskform;
