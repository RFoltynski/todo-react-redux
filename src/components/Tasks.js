import React, { Component } from "react";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/todos ")
      .then(res => res.json())
      .then(data => this.setState({ tasks: data }));
  }

  render() {
    let postItems = this.state.tasks.map(item => {
      return (
        <div key={item.id}>
          <h1>Task: {item.title}</h1>
        </div>
      );
    });
    return <div>Tasks:{postItems}</div>;
  }
}
export default Tasks;
