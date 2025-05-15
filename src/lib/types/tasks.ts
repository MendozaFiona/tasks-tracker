export type TaskType = {
  id: string;
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  start?: string;
  end?: string;
  deadline: string;
  note: string;
  attachmentCount: number;
  // attachment: AttachmentType
};

type OptionType = {
  label: string;
};

export type PriorityOptionType = OptionType & {
  color: string;
  value: TaskPriority;
};

export type StatusOptionType = OptionType & {
  icon: string;
  color: string;
  value: TaskStatus;
};

// enum

export enum TaskPriority {
  High = "high",
  Medium = "medium",
  Low = "low",
}

export enum TaskStatus {
  ToDo = "todo",
  InProgress = "in-progress",
  Completed = "completed",
  Cancelled = "cancelled",
}
