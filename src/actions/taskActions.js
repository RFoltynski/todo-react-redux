import { FETCH_TASKS, NEW_TASK } from "./types";

export function fetchTasks() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/todos ")
      .then(res => res.json())
      .then(tasks =>
        dispatch({
          type: FETCH_TASKS,
          payload: tasks
        })
      );
  };
}

export function createTask(taskData) {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/todos ", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(taskData)
    })
      .then(res => res.json())
      .then(task =>
        dispatch({
          type: NEW_TASK,
          payload: task
        })
      );
  };
}
