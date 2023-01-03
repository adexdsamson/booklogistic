import { ReactNode } from "react";
import { DeepPartial, Resolver, SubmitHandler, FieldValues, Path, EventType } from "react-hook-form";

export type FormProps<TFormValues extends FieldValues> = {
  defaultValues?: DeepPartial<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  children: ReactNode;
  className?: string;
  resolver?: Resolver<TFormValues>;
  onWatch?: (
    value?: DeepPartial<TFormValues>,
    name?: Path<TFormValues>,
    type?: EventType
  ) => void;
};
