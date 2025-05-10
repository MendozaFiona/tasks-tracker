import TaskFilter from "@/components/common/TaskFilter";
import { TaskList as NoneList } from "@/components/tasks/none/TaskList";

const Tasks = () => {
  return (
    <div>
      <TaskFilter />
      <NoneList />
    </div>
  );
};

export default Tasks;
