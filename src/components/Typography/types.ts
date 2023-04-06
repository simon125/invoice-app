import {
  DetailedHTMLProps,
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

interface Paragraph
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  element?: "p";
}

interface Heading
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

interface Label
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  element?: "label";
}

interface Span
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  element?: "span";
}

type TypographyProps = Paragraph | Heading | Label | Span;

export type Variant =
  | "default"
  | "light"
  | "saturatedLight"
  | "dark"
  | "violet";

interface RestProps {
  children?: ReactNode;
  variant?: Variant;
  fontSize?: `${number}rem`;
}

export type FinalProps = TypographyProps & RestProps;
