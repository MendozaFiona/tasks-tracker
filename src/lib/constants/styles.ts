import { blue, gray, white } from "@/lib/constants/colors";

// TODO: use variables for components here like in _variables.scss ex. primaryButton = color
export const customStyles = {
  control: (base: any) => ({
    ...base,
    backgroundColor: gray.neutral, // TODO: based on light theme currently
    borderColor: gray.base, // TODO: based on light theme currently
    borderWidth: "1px",
    minHeight: "38px",
  }),

  menu: (base: any) => ({
    ...base,
    backgroundColor: gray.neutral, // TODO: based on light theme currently
  }),

  option: (base: any, state: any) => ({
    ...base,
    // TODO: based on light theme currently
    backgroundColor: state.isFocused
      ? blue.light
      : state.isSelected
      ? blue.light
      : white,
    cursor: "pointer",
  }),
};
