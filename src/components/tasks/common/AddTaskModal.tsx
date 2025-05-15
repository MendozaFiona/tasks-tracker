import Select from "react-select";
import {
  ICONS,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
} from "@/lib/constants/common";
import { Dispatch, FC, SetStateAction } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {
  CustomPriorityOption,
  CustomPrioritySingleValue,
} from "@/components/tasks/dropdown/PriorityDropdown";
import { customStyles } from "@/lib/constants/styles";
import {
  CustomStatusOption,
  CustomStatusSingleValue,
} from "@/components/tasks/dropdown/StatusDropdown";

interface AddTaskModalProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AddTaskModal: FC<AddTaskModalProps> = ({ isOpen, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      centered
      dialogClassName="fm-modal"
    >
      <Modal.Body>
        <Form className="fm-form-content">
          <div className="d-flex" style={{ gap: "23px" }}>
            <Form.Control
              className="fm-input fm-form-control"
              type="text"
              placeholder="Enter title"
            />
            <Select
              className="form-control fm p-0"
              options={PRIORITY_OPTIONS}
              // value={PRIORITY_OPTIONS.find((option) => option.value === value)}
              // onChange={(selectedOption) => onChange(selectedOption.value)}
              components={{
                Option: CustomPriorityOption,
                SingleValue: CustomPrioritySingleValue,
              }}
              styles={customStyles}
              isSearchable={false}
            />
            <Select
              className="form-control fm p-0"
              options={STATUS_OPTIONS}
              // value={STATUS_OPTIONS.find((option) => option.value === value)}
              // onChange={(selectedOption) => onChange(selectedOption.value)}
              components={{
                Option: CustomStatusOption,
                SingleValue: CustomStatusSingleValue,
              }}
              styles={customStyles}
              isSearchable={false}
            />
          </div>

          <Form.Control
            className="fm-input fm-form-control"
            as="textarea"
            rows={3}
            placeholder="Enter note"
          />

          {/* temporary, use date time picker */}
          <div className="d-flex fm-gap-20 align-items-center">
            <Form.Control
              className="fm-form-control"
              type="text"
              placeholder="Deadline"
            />

            <Form.Control
              className="fm-form-control"
              type="text"
              placeholder="Start Time"
            />

            <Form.Control
              className="fm-form-control"
              type="text"
              placeholder="End Time"
            />

            <Form.Check
              type="switch"
              id="custom-switch"
              // checked={enabled}
              // onChange={(e) => setEnabled(e.target.checked)}
            />
          </div>

          <div className="d-flex fm-gap-30">
            {/* placeholder for attachment display */}
            <Form.Control
              className="fm-input fm-form-control"
              as="textarea"
              rows={2}
              placeholder="Attachment Area"
            />
            <Button className="fm-button-tertiary text-nowrap fm-fs-14 fm-max-h-36">
              Add Attachment
            </Button>
          </div>

          <div className="d-flex justify-content-between">
            <div className="d-flex fm-gap-40 fm-fs-12 flex-nowrap">
              <div className="d-flex align-items-center fm-completed fm-gap-5 cursor-pointer">
                Mark as Complete <i className={`bi bi-${ICONS.check}`} />
              </div>
              <div className="d-flex align-items-center fm-cancelled fm-gap-5 cursor-pointer">
                Mark as Cancelled <i className={`bi bi-${ICONS.x}`} />
              </div>
            </div>
            <div className="d-flex fm-gap-42">
              <Button
                className="fm-button-secondary fm-w-140"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                className="fm-button-primary fm-w-140"
                onClick={handleClose}
              >
                Save
              </Button>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
