import { ICONS } from "@/lib/constants/common";
import { getFileIcon } from "@/lib/helpers/file";
import { truncateString } from "@/lib/helpers/string";
import { FileWithPreview } from "@/lib/types/common";
import { Dispatch, FC, SetStateAction } from "react";

interface FormAttachmentDisplayProps {
  files?: FileWithPreview[];
  setFiles?: Dispatch<SetStateAction<FileWithPreview[]>>;
}

const FormAttachmentDisplay: FC<FormAttachmentDisplayProps> = ({
  files,
  setFiles,
}) => {
  const handleRemove = (id: string) => {
    if (!setFiles) return;
    const newFiles = files?.filter((item) => item.id !== id) || [];

    setFiles(newFiles);
  };

  return (
    <div className="fm-attachment-section">
      {!!files && !!files.length ? (
        files?.map((file: FileWithPreview) => {
          console.log(file);
          const extension = file?.name?.split(".")?.pop()?.toLowerCase();

          return (
            <div className="fm-attachment-item" key={file.id}>
              <i
                onClick={() => handleRemove(file.id)}
                className={`bi-${ICONS.x} position-absolute top-0 end-0 fm-icon fm-attachment-delete`}
              />
              <i
                className={`bi-${getFileIcon(extension)}`}
                style={{ fontSize: "2.5rem" }}
              />
              <span style={{ fontSize: "0.75rem" }}>
                {truncateString(file.name, 8)}
              </span>
            </div>
          );
        })
      ) : (
        <div className="d-flex align-items-center justify-content-center w-100 fm-text-secondary">
          No attachments yet
        </div>
      )}
    </div>
  );
};

export default FormAttachmentDisplay;
