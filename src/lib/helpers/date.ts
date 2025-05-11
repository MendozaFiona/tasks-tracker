import { format, parseISO } from "date-fns";

// ex. 01-20-25 10:00 AM
export const formatDateTime = (date?: string) => {
  if (!date) return "";
  return format(parseISO(date), "MM-dd-yy hh:mm a");
};

export const formatDate = (date?: string) => {
  if (!date) return "";
  return format(parseISO(date), "MM-dd-yy");
};
