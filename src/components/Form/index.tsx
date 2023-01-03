import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormProps } from "./Form";
// import { DevTool } from "@hookform/devtools";


export const Form = <TFormValues extends Record<string, any>>({
  defaultValues,
  onSubmit,
  children,
  className,
  resolver,
  onWatch,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    defaultValues,
    resolver,
    mode: "onChange",
  });

  useEffect(() => {
    let subscription = methods.watch((value, { name, type }) =>
      onWatch?.(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [methods.watch]);

  return (
    <FormProvider  {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
       {/* <DevTool control={methods.control} /> */}
    </FormProvider>
  );
};
