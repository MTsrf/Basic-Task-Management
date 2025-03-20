/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import {
  deleteTask,
  fetchTasks,
  updateTask,
} from "../redux/reducers/taskSlicer";

const TaskList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { tasks, loading, error } = useSelector(
    (state: RootState) => state?.task
  );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  console.log({ tasks });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={task.isCompleted ? "task-row-completed" : "task-row"}
          >
            <Checkbox
              onChange={() => {
                dispatch(
                  updateTask({ ...task, isCompleted: !task.isCompleted })
                );
              }}
              checked={task.isCompleted}
            />
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div style={{ width: "200px" }}>
              <Button onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
