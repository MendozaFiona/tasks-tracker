import PriorityBadge from "@/components/tasks/badges/PriorityBadge";
import { PriorityOptionType } from "@/lib/types/tasks";
import { components, OptionProps, SingleValueProps } from "react-select";

export const CustomPriorityOption = (
  props: OptionProps<PriorityOptionType, false>
) => {
  const { data } = props;

  return (
    <components.Option {...props}>
      <PriorityBadge priority={data.value} details={data} />
    </components.Option>
  );
};

export const CustomPrioritySingleValue = (
  props: SingleValueProps<PriorityOptionType, false>
) => {
  const { data } = props;

  return (
    <components.SingleValue {...props}>
      <PriorityBadge priority={data.value} details={data} />
    </components.SingleValue>
  );
};
