import Select from "react-select";
import {
  ICONS,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
} from "@/lib/constants/common";
import { Dispatch, FC, SetStateAction, useState } from "react";
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
import DatePicker from "react-datepicker";
import FormAttachmentDisplay from "@/components/tasks/common/FormAttachmentDisplay";
import { Controller, useForm } from "react-hook-form";

interface AddTaskModalProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AddTaskModal: FC<AddTaskModalProps> = ({ isOpen, setOpen }) => {
  const localStatusOptions = STATUS_OPTIONS.filter(
    (item) => !item.hideInOptions
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const shouldAlarm = watch("shouldAlarm");

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    // handleClose()
  };

  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      centered
      dialogClassName="fm-modal"
    >
      <Modal.Body>
        <Form
          className="fm-form-content"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="d-flex" style={{ gap: "23px" }}>
            <Form.Control
              className="fm-input fm-form-control"
              type="text"
              placeholder="Enter Title"
              {...register("title", { required: "Title is required" })}
              isInvalid={!!errors.title}
            />

            <Controller
              name="priority"
              control={control}
              defaultValue={PRIORITY_OPTIONS[0]}
              render={({ field }) => (
                <Select
                  {...field}
                  options={PRIORITY_OPTIONS}
                  components={{
                    Option: CustomPriorityOption,
                    SingleValue: CustomPrioritySingleValue,
                  }}
                  styles={customStyles}
                  className="form-control fm p-0"
                  isSearchable={false}
                />
              )}
            />

            <Controller
              name="status"
              control={control}
              defaultValue={localStatusOptions[0]}
              render={({ field }) => (
                <Select
                  {...field}
                  options={localStatusOptions}
                  components={{
                    Option: CustomStatusOption,
                    SingleValue: CustomStatusSingleValue,
                  }}
                  styles={customStyles}
                  className="form-control fm p-0"
                  isSearchable={false}
                />
              )}
            />
          </div>

          <Form.Control
            className="fm-input fm-form-control"
            as="textarea"
            rows={3}
            placeholder="Enter Note"
            {...register("note")}
            isInvalid={!!errors.note}
          />

          <div className="d-flex fm-gap-20 align-items-center">
            <div className="fm-datepicker">
              <Controller
                name="deadline"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    placeholderText="Deadline"
                    showTimeSelect
                    dateFormat="Pp"
                    className="form-control fm-form-control"
                  />
                )}
              />
            </div>

            <div className="fm-datepicker">
              <Controller
                name="startDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    placeholderText="Start Date"
                    showTimeSelect
                    dateFormat="Pp"
                    className="form-control fm-form-control"
                    disabled={!shouldAlarm}
                  />
                )}
              />
            </div>

            <div className="fm-datepicker">
              <Controller
                name="endDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    placeholderText="End Date"
                    showTimeSelect
                    dateFormat="Pp"
                    className="form-control fm-form-control"
                    disabled={!shouldAlarm}
                  />
                )}
              />
            </div>

            <Controller
              name="shouldAlarm"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  checked={field.value}
                  onChange={(checked) => {
                    if (field.value) {
                      setValue("endDate", null);
                      setValue("startDate", null);
                    }
                    field.onChange(checked);
                  }}
                />
              )}
            />
          </div>

          <div className="d-flex fm-gap-30 justify-content-between">
            <FormAttachmentDisplay />
            <Button
              variant="outline-primary"
              className="fm-button-tertiary text-nowrap fm-fs-14 fm-max-h-36"
            >
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
                variant="secondary"
                className="fm-button-secondary fm-w-140"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="fm-button-primary fm-w-140"
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
