import { gray, orange, red } from "@/lib/constants/colors";
import { TaskPriority } from "@/lib/types/tasks";
import { FC } from "react";

interface PriorityBadgeProps {
  priority: TaskPriority;
}

const PriorityBadge: FC<PriorityBadgeProps> = ({ priority }) => {
  const getDetails = () => {
    switch (priority) {
      case TaskPriority.High: {
        return { color: red.base, label: "High" };
      }
      case TaskPriority.Medium: {
        return { color: orange.amber, label: "Medium" };
      }
      case TaskPriority.Low:
      default: {
        return { color: gray.medium, label: "Low" };
      }
    }
  };

  const details = getDetails();

  return (
    <div
      className="d-flex align-items-center"
      style={{ color: details.color, gap: "5px" }}
    >
      <div
        className="rounded-circle"
        style={{ background: details.color, width: "8px", height: "8px" }}
      />
      {details.label}
    </div>
  );
};

export default PriorityBadge;
