/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState([true]);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Modificación de tareas");
    setLoading(false);

    return () => {
      console.log("La lista de tareas ha sido desmontada");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("Cambiar el estado de una tarea");
  };

  return (
    <div>
      <div>Your task:</div>
      {/* TODO: aplicar un For/Map para renderizar un a lista */}
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskListComponent;
