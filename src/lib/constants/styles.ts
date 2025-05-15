import { gray } from "@/lib/constants/colors";

export const customStyles = {
  control: (base: any) => ({
    ...base,
    backgroundColor: gray.neutral, // TODO: based on light currently
    borderColor: gray.base, // TODO: based on light theme currently
    borderWidth: "1px",
    minHeight: "38px",
  }),

  menu: (base: any) => ({
    ...base,
    backgroundColor: gray.neutral, // TODO: based on light currently
  }),
};
