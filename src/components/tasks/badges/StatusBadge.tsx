import { gray, green, orange, red } from "@/lib/constants/colors";
import { ICONS, STATUS_OPTIONS } from "@/lib/constants/common";
import { StatusOptionType, TaskStatus } from "@/lib/types/tasks";
import { FC } from "react";

interface StatusBadgeProps {
  status: TaskStatus;
  details?: StatusOptionType;
}

const StatusBadge: FC<StatusBadgeProps> = ({ status, details }) => {
  const getDetails = () => {
    const selectedStatus =
      STATUS_OPTIONS.find((item) => item.value === status) || STATUS_OPTIONS[0];
    return selectedStatus;
  };

  const _details = details || getDetails();

  return (
    <span
      className="d-flex align-items-center fm-badge"
      style={{ color: _details.color, gap: "5px" }}
    >
      <i className={`bi bi-${_details.icon}`} />
      <span>{_details.label}</span>
    </span>
  );
};

export default StatusBadge;
