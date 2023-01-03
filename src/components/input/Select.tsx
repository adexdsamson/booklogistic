import { Select, SelectProps } from "./Base";
import { memo } from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { TextInputProps } from "./Input";
import { TextInputRoot } from "./TextInputRoot";

type SelectOptionProps = {
  options: { label: string; value: string }[];
};

const CustomSelect = <TFormValues extends Record<string, any>>({
  containerClass,
  disableLabel,
  labelClassName,
  label,
  methods,
  name,
  options,
  ...rest
}: TextInputProps<SelectProps & SelectOptionProps, TFormValues>) => {
  
  let renderOptions = options.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  return (
    <div className={containerClass}>
      {!disableLabel && (
        <label
          className={`font-inter text-[14px] text-[#00473E] block ${labelClassName}`}
        >
          {" "}
          {label}{" "}
        </label>
      )}
      <Select
        {...rest}
        {...methods?.register(name)}
        ref={methods.register(name).ref}
        children={renderOptions}
        className={cn(
          `focus:ring-1 focus:!ring-[#00473E]/30 focus:outline-none w-full pl-4 text-[12px] rounded-sm pr-4 py-2 placeholder:leading-4 placeholder:font-zen font-zen`
        )}
      />
    </div>
  );
};

const MemorizeCustomSelect = memo(
  CustomSelect,
  (prev, next) => {
    // re-renders when they are not the same
    if (prev.methods.formState.isDirty !== next.methods.formState.isDirty) {
      return false
    }

    if (prev.options !== next.options) {
      return false
    }

    return true
  }
);


export const TextSelect = <TFormValues extends Record<string, any>>(
  props: Omit<
    TextInputProps<SelectProps & SelectOptionProps, TFormValues>,
    "methods"
  >
) => {
  const methods = useFormContext();

  return (
    <TextInputRoot>
      <MemorizeCustomSelect {...props} methods={methods} />
    </TextInputRoot>
  );
};