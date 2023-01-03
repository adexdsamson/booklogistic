import {
  ElementType,
  PropsWithChildren,
  ComponentPropsWithRef,
  ReactNode,
} from "react";

export type Colors =
  | "default"
  | "primary"
  | "textPrimary"
  | "secondary"
  | "textSecondary"
  | "textTertiary"
  | "error"
  | "white";

type PolymorphicAsProps<E extends ElementType> = {
  as?: E | "span" | "p" | "h6" | "h5" | "h4" | "h3" | "h2" | "h1";
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom?: boolean;
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: "inherit" | "left" | "center" | "right" | "justify";
  /**
   *
   */
  color?: Colors;
  /**
   * Paragraph
   */
  paragraph?: boolean;
  /**
   * Font variation for typography.
   */
  variant: "header" | "body" | "caption";
  /**
   * Override or set the component style.
   */
  className?: string;
  /**
   * Passing content to the component.
   */
  children?: ReactNode;
};

export type TypographyProps<E extends ElementType> = PolymorphicAsProps<E>;

