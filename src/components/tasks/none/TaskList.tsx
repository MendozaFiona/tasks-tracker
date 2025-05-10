import PriorityBadge from "@/components/tasks/badges/PriorityBadge";
import { SAMPLE_TASKS } from "@/lib/constants/dummy";
import { Table } from "react-bootstrap";

const TaskList = () => {
  return (
    <div className="fm-mt-35 fm-card fm-group-by-none">
      <Table className="fm-table" responsive>
        <tbody>
          {SAMPLE_TASKS?.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>
                <PriorityBadge priority={task.priority} />
              </td>
              <td>{task.status}</td>
              <td>Start: {task.start}</td>
              <td>End: {task.end}</td>
              <td>Deadline: {task.deadline}</td>
              <td>Note: {task.note}</td>
              <td>0 $</td>
              <td>actions</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export { TaskList };
