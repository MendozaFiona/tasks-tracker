import { FILE_ICONS } from "@/lib/constants/common";

export const getFileIcon = (ext?: string) => {
  if (!ext) return "file-earmark";

  return FILE_ICONS[ext] || "file-earmark";
};
