import { ElementType } from "react";
import { TypographyProps } from "./Typography";
import cn from "classnames";


const defaultElement = "p";

export const Typography = <E extends ElementType = typeof defaultElement>({
  children,
  as,
  align,
  gutterBottom,
  color = "default",
  paragraph,
  variant,
  ...rest
}: TypographyProps<E>) => {
  const Component = as ?? defaultElement;


  const fontSizeVariant = {
    header: "font-zen text-[25px] font-extraBold leading-4 text-black",
    body: "text-[12.8px] font-zen leading-6 tracking-normal text-gray-500",
    caption: "text-[10.29px] font-zen leading-4 tracking-wider text-gray-400",
  };


  return (
    <Component
      {...rest}
      className={cn("", rest.className, {
        "mb-[0.35em]": gutterBottom,
        "mb-[16px]": paragraph,
        [`text-${align}`]: align,
        [fontSizeVariant[variant]]: variant,
      })}
    >
      {children}
    </Component>
  );
};