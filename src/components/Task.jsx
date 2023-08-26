import classNames from "classnames";
import React from "react";
import { useStore } from "../store";

// const STATUS = "PLANNED";

const Task = ({ title }) => {
  const task = useStore((store) => store.tasks.find((task) => task.title === title));
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  return (
    <div className="task" draggable onDragStart={() => setDraggedTask(task.title)}>
      <div>{task.title}</div>
      <div className="bottom-wrapper">
        <div onClick={() => deleteTask(title)}>Delete task</div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
