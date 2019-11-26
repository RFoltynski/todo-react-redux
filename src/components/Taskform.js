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

  onSubmit = e => {
    e.preventDefault();

    const task = {
      title: this.state.title
    };

    fetch("https://jsonplaceholder.typicode.com/todos ", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(res => res.json())
      .then(data => console.log(data));
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
export default Taskform;
