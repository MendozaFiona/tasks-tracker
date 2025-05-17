import Select from "react-select";
import {
  ICONS,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
} from "@/lib/constants/common";
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
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
import { useDropzone } from "react-dropzone";
import { FileWithPreview } from "@/lib/types/common";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { TaskType } from "@/lib/types/tasks";

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

  const dropzoneRef = useRef<HTMLInputElement>(null);

  const [attachments, setAttachments] = useState<FileWithPreview[]>([]);

  // TODO: temporary save
  const [tasks, setTasks] = useLocalStorage<TaskType[]>("tasks", []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newAttachments = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        id: crypto.randomUUID(),
      })
    );

    setAttachments((prev) => [...prev, ...newAttachments]);
  }, []);

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    noClick: true,
  });

  const handleClose = () => {
    reset();
    setAttachments([]);
    setOpen(false);
  };

  const onSubmit = (data: any) => {
    console.log(data);

    try {
      const newTasks = [...tasks, data];

      setTasks(newTasks);
      handleClose();
    } catch (error) {
      console.error("Something went wrong:", error);
    }
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

          <div
            {...getRootProps()}
            className="d-flex fm-gap-30 justify-content-between"
          >
            <FormAttachmentDisplay
              files={attachments}
              setFiles={setAttachments}
            />
            <div className="d-inline-block">
              <input {...getInputProps()} ref={dropzoneRef} />
              <Button
                variant="outline-primary"
                className="fm-button-tertiary text-nowrap fm-fs-14 fm-max-h-36"
                onClick={() => dropzoneRef.current?.click()}
              >
                Add Attachment
              </Button>
            </div>
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
