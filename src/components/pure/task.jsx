import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { useEffect } from "react";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Tarea creada");

    return () => {
      console.log(`Task: ${task.name} está siendo desmontada`);
    };
  }, [task]);

  return (
    <div>
      <h2>Nombre: {task.name}</h2>
      <h3>Descripción: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>Esta tarea esta: {task.completed ? "COMPLETADA" : "PENDIENTE"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
