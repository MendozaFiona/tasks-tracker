import TaskActions from "@/components/tasks/common/TaskActions";
import TaskFilter from "@/components/tasks/common/TaskFilter";
import { TaskList as NoneList } from "@/components/tasks/none/TaskList";

const Tasks = () => {
  return (
    <div>
      <TaskFilter />
      <NoneList />
      <TaskActions />
    </div>
  );
};

export default Tasks;
