import StatusBadge from "@/components/tasks/badges/StatusBadge";
import { StatusOptionType } from "@/lib/types/tasks";
import { components, OptionProps, SingleValueProps } from "react-select";

export const CustomStatusOption = (
  props: OptionProps<StatusOptionType, false>
) => {
  const { data } = props;

  return (
    <components.Option {...props}>
      <StatusBadge status={data.value} details={data} />
    </components.Option>
  );
};

export const CustomStatusSingleValue = (
  props: SingleValueProps<StatusOptionType, false>
) => {
  const { data } = props;

  return (
    <components.SingleValue {...props}>
      <StatusBadge status={data.value} details={data} />
    </components.SingleValue>
  );
};
