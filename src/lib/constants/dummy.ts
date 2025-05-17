import { TaskPriority, TaskStatus, TaskType } from "@/lib/types/tasks";

export const SAMPLE_TASKS: TaskType[] = [
  {
    id: "task-1",
    name: "showcase exhibit",
    status: TaskStatus.InProgress,
    priority: TaskPriority.High,
    start: "2025-05-10T14:30:00Z",
    end: "2025-05-10T14:30:00Z",
    deadline: "2025-05-10T14:30:00Z",
    note: "Do not do this late",
    attachmentCount: 2,
    attachments: [],
  },
  {
    id: "task-2",
    name: "showcase exhibit",
    status: TaskStatus.InProgress,
    priority: TaskPriority.High,
    start: "2025-05-10T14:30:00Z",
    end: "2025-05-10T14:30:00Z",
    deadline: "2025-05-10T14:30:00Z",
    note: "Do not do this late",
    attachmentCount: 0,
    attachments: [],
  },
];
