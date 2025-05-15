import { gray, orange, red } from "@/lib/constants/colors";
import { PRIORITY_OPTIONS } from "@/lib/constants/common";
import { PriorityOptionType, TaskPriority } from "@/lib/types/tasks";
import { FC } from "react";

interface PriorityBadgeProps {
  priority: TaskPriority;
  details?: PriorityOptionType;
}

const PriorityBadge: FC<PriorityBadgeProps> = ({ priority, details }) => {
  const getDetails = () => {
    const selectedPriority =
      PRIORITY_OPTIONS.find((item) => item.value === priority) ||
      PRIORITY_OPTIONS[0];
    return selectedPriority;
  };

  const _details = details || getDetails();

  return (
    <span
      className="d-flex align-items-center fm-badge"
      style={{ color: _details.color, gap: "5px" }}
    >
      <span
        className="rounded-circle"
        style={{ background: _details.color, width: "10px", height: "10px" }}
      />
      {_details.label}
    </span>
  );
};

export default PriorityBadge;
