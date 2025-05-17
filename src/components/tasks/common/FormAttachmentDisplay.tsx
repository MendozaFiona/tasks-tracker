import { getFileIcon } from "@/lib/helpers/file";
import { truncateString } from "@/lib/helpers/string";
import { FileWithPreview } from "@/lib/types/common";
import { FC } from "react";

interface FormAttachmentDisplayProps {
  files?: FileWithPreview[];
}

const FormAttachmentDisplay: FC<FormAttachmentDisplayProps> = ({ files }) => {
  return (
    <div className="fm-attachment-section">
      {files?.map((file: FileWithPreview) => {
        console.log(file);
        const extension = file?.name?.split(".")?.pop()?.toLowerCase();

        return (
          <div className="fm-attachment-item" key={file.id}>
            <i
              className={`bi-${getFileIcon(extension)}`}
              style={{ fontSize: "2.5rem" }}
            />
            <span style={{ fontSize: "0.75rem" }}>
              {truncateString(file.name, 10)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FormAttachmentDisplay;
