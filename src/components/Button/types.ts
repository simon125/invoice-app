import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type ButtonVariant = "violet" | "dark" | "red" | "light";

export type ButtonIcons = "plusCircle";

export interface StyledButtonProps {
  variant: ButtonVariant;
  icon: boolean;
  block?: boolean;
  variantConfig: ButtonVariantConfig;
}

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ButtonIcons;
  block?: boolean;
}

export interface ButtonVariantConfig {
  hoverBackgroundColor: string;
  hoverColor: string;
  backgroundColor: string;
  color: string;
}
