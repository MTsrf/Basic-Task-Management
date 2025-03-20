import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import { deleteTask, updateTask } from "../redux/reducers/taskSlicer";

const TaskList = () => {
  const TaskList = useSelector((state: RootState) => state?.task.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="task-list">
        {TaskList.map((task) => (
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
