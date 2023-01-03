import {
  Path,
  UseFormRegister,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";

export type TextInputProps<T, TFormValues extends FieldValues> = T & {
  label?: string;

  labelClassName?: string | string[];

  containerClass?: string;

  disableLabel?: boolean;

  methods: UseFormReturn<TFormValues>;

  name: Path<TFormValues>;

  ref?: any;

  inputClass?: string | string[];

  type?: string;

  rows?: number;

  className?: string;
};
