import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../actions/taskActions";

class Tasks extends Component {
  componentWillMount() {
    this.props.fetchTasks();
  }
  render() {
    let postItems = this.props.tasks.map(item => {
      return (
        <div key={item.id}>
          <h1>Task: {item.title}</h1>
          <div>Completed: {`${item.completed}`}</div>
        </div>
      );
    });
    return <div>Tasks:{postItems}</div>;
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.items
});
export default connect(mapStateToProps, { fetchTasks })(Tasks);
