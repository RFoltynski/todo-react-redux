import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../actions/taskActions";

class Tasks extends Component {
  componentWillMount() {
    this.props.fetchTasks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTask) {
      this.props.tasks.unshift(nextProps.newTask);
    }
  }
  render() {
    let postItems = this.props.tasks.map(item => {
      return <h1>Task: {item.title}</h1>;
    });
    return <div>Tasks:{postItems}</div>;
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.items,
  newTask: state.tasks.item
});
export default connect(mapStateToProps, { fetchTasks })(Tasks);
