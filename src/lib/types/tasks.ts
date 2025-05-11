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
