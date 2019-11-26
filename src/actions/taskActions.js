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
