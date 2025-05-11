import { TASK_FILTERS } from "@/lib/constants/common";
import { Form } from "react-bootstrap";

const TaskFilter = () => {
  return (
    <Form className="d-flex fm-filter-bar ">
      {TASK_FILTERS.map((filter) => (
        <Form.Check
          name="task-filter"
          type="radio"
          key={filter.label}
          id={`custom-switch-${filter.value}`}
          label={filter.label}
          value={filter.value}
        />
      ))}
    </Form>
  );
};

export default TaskFilter;
