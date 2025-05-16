import { gray, green, orange, red } from "@/lib/constants/colors";
import {
  PriorityOptionType,
  StatusOptionType,
  TaskPriority,
  TaskStatus,
} from "@/lib/types/tasks";

export const ICONS = {
  home: "house-door-fill",
  task: "sticky-fill",
  calendar: "calendar-fill",
  settings: "gear-fill",
  todo: "hourglass-top",
  inProgress: "hourglass-split",
  completed: "hourglass-bottom",
  cancelled: "hourglass",
  attachment: "paperclip",
  delete: "trash-fill",
  edit: "pencil-fill",
  add: "plus-circle-fill",
  archive: "archive-fill",
  check: "check-circle-fill",
  x: "x-circle-fill",
};

export const TASK_FILTERS = [
  { label: "none", value: "none" },
  { label: "by status", value: "status" },
  { label: "by priority", value: "priority" },
  { label: "by deadline", value: "deadline" },
];

export const PRIORITY_OPTIONS: PriorityOptionType[] = [
  { color: gray.medium, label: "Low", value: TaskPriority.Low },
  { color: orange.amber, label: "Medium", value: TaskPriority.Medium },
  { color: red.base, label: "High", value: TaskPriority.High },
];

export const STATUS_OPTIONS: StatusOptionType[] = [
  {
    icon: ICONS.inProgress,
    color: orange.amber,
    label: "In Progress",
    value: TaskStatus.InProgress,
  },
  {
    icon: ICONS.completed,
    color: green.base,
    label: "Completed",
    value: TaskStatus.Completed,
    hideInOptions: true,
  },
  {
    icon: ICONS.cancelled,
    color: red.base,
    label: "Cancelled",
    value: TaskStatus.Cancelled,
    hideInOptions: true,
  },
  {
    icon: ICONS.todo,
    color: gray.medium,
    label: "To Do",
    value: TaskStatus.ToDo,
  },
];
