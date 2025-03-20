import React, { useState } from "react";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import TaskList from "./TaskList";
import { addTask } from "../redux/reducers/taskSlicer";
import { useDispatch } from "react-redux";

const TaskManager = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ formValues });
    if (!formValues.title || !formValues.description) {
      return alert("All fields are required");
    }
    const newTask = { ...formValues, id: Date.now() };

    dispatch(addTask(newTask));
    setFormValues({ title: "", description: "", isCompleted: false });
  };
  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <h1>Task Manager</h1>
        </div>
        <div className="task-area">
          <form onSubmit={handlerSubmit} className="task-form">
            <div style={{ width: 100 }}>
              <Checkbox
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    isCompleted: e.target.checked,
                  });
                }}
                checked={formValues.isCompleted}
              />
            </div>
            <TextField
              onChange={onHandleChange}
              value={formValues.title}
              name="title"
            />
            <TextField
              name="description"
              onChange={onHandleChange}
              value={formValues.description}
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className="task-list-area">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
