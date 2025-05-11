import PriorityBadge from "@/components/tasks/badges/PriorityBadge";
import StatusBadge from "@/components/tasks/badges/StatusBadge";
import { ICONS } from "@/lib/constants/common";
import { SAMPLE_TASKS } from "@/lib/constants/dummy";
import { formatDateTime, formatDate } from "@/lib/helpers/date";
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
              <td>
                <StatusBadge status={task.status} />
              </td>
              <td className="fm-fs-14">
                <span className="fm-row-label">Start:</span>{" "}
                {formatDateTime(task.start)}
              </td>
              <td className="fm-fs-14">
                <span className="fm-row-label">End:</span>{" "}
                {formatDateTime(task.end)}
              </td>
              <td className="fm-fs-14">
                <span className="fm-row-label">Deadline:</span>{" "}
                {formatDate(task.deadline)}
              </td>
              <td className="fm-fs-14">
                <span className="fm-row-label">Note:</span> {task.note}
              </td>
              <td className="fm-fs-14 fm-secondary-icon text-end">
                <span>{task.attachmentCount}</span>{" "}
                <i className={`bi bi-${ICONS.attachment}`} />
              </td>
              <td className="fm-table-actions">
                <i className={`bi bi-${ICONS.edit}`} />
                <i className={`bi bi-${ICONS.delete}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export { TaskList };
