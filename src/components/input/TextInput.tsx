import { Input, InputProps, TextArea, TextAreaProps } from "./Base";
import { memo } from "react";
import cn from "classnames";
import { TextInputProps } from "./Input";
import { TextInputRoot } from "./TextInputRoot";
import { useFieldArray, useFormContext } from "react-hook-form";

// Input component
const CustomInput = <TFormValues extends Record<string, any>>({
  label,
  labelClassName,
  containerClass,
  disableLabel,
  methods,
  name,
  inputClass = "",
  ...rest
}: TextInputProps<InputProps, TFormValues>) => {
  return (
    <div className={containerClass}>
      {!disableLabel && (
        <label
          className={`font-inter text-[14px] block ${labelClassName}`}
        >
          {" "}
          {label}{" "}
        </label>
      )}
      <Input
        {...rest}
        {...methods?.register(name)}
        ref={methods.register(name).ref}
        className={cn(
          `bg-gray-200 w-full py-2 rounded-md px-2 mb-2`,
          inputClass
        )}
      />
    </div>
  );
};

const MemorizeCustomInput = memo<TextInputProps<InputProps, any>>(
  (props) => <CustomInput {...props} />,
  (prev, next) =>
    prev.methods?.formState.isDirty === next.methods?.formState.isDirty
);

export const TextInput = <TFormValues extends Record<string, any>>(
  props: Omit<TextInputProps<InputProps, TFormValues>, "methods">
) => {
  const methods = useFormContext();

  return (
    <TextInputRoot>
      <MemorizeCustomInput
        {...props}
        placeholder={props.placeholder}
        methods={methods}
      />
    </TextInputRoot>
  );
};


// TextArea component
export const CustomTextAreaInput = <TFormValues extends Record<string, any>>({
  label,
  methods,
  labelClassName,
  containerClass,
  className,
  name,
}: TextInputProps<TextAreaProps, TFormValues>) => {
  return (
    <div className={containerClass}>
      <label
        className={`font-inter text-[14px] ${labelClassName}`}
      >
        {" "}
        {label}{" "}
      </label>
      <TextArea
        {...methods?.register(name)}
        ref={methods.register(name).ref}
        className={`bg-gray-200 w-full py-2 rounded-md px-2 my-3 ${className}`}
      />
    </div>
  );
};

const MemorizeCustomTextAreaInput = memo(
  CustomTextAreaInput,
  (prev, next) =>
    prev.methods?.formState.isDirty === next.methods?.formState.isDirty
);

export const TextAreaInput = <TFormValues extends Record<string, any>>(
  props: Omit<TextInputProps<TextAreaProps, TFormValues>, "methods">
) => {
  const methods = useFormContext();
  return (
    <TextInputRoot>
      <MemorizeCustomTextAreaInput {...props} methods={methods} />
    </TextInputRoot>
  );
};