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

  return (
    <div>
      <div>Your task:</div>
      {/* TODO: aplicar un For/Map para renderizar un a lista */}
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskListComponent;
