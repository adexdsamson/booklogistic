import React from "react";
import { useFormContext } from "react-hook-form";

export const TextInputRoot = <TFormValues extends Record<string, any>>({
  children,
}: {
  children: any;
}) => {
  const methods = useFormContext<TFormValues>();

  return React.Children.map(children, (child) =>
    React.createElement(child.type, {
      ...{
        ...child.props,
        methods: methods,
        key: child.props.name,
      },
    })
  );
};
