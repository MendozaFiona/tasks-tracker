import { gray, green, orange, red } from "@/lib/constants/colors";
import { ICONS } from "@/lib/constants/common";
import { TaskStatus } from "@/lib/types/tasks";
import { FC } from "react";

interface StatusBadgeProps {
  status: TaskStatus;
}

const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  const getDetails = () => {
    switch (status) {
      case TaskStatus.InProgress: {
        return {
          icon: ICONS.inProgress,
          color: orange.amber,
          label: "In Progress",
        };
      }
      case TaskStatus.Completed: {
        return {
          icon: ICONS.completed,
          color: green.base,
          label: "Completed",
        };
      }
      case TaskStatus.Cancelled: {
        return { icon: ICONS.cancelled, color: red.base, label: "Cancelled" };
      }
      case TaskStatus.ToDo:
      default: {
        return { icon: ICONS.todo, color: gray.light, label: "To Do" };
      }
    }
  };

  const details = getDetails();

  return (
    <div
      className="d-flex align-items-center fm-badge"
      style={{ color: details.color, gap: "5px" }}
    >
      <i className={`bi bi-${details.icon}`} />
      <span>{details.label}</span>
    </div>
  );
};

export default StatusBadge;
