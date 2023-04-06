import { FC, CSSProperties, ElementType } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "style/slice";
import { ThemeModeEnum } from "style/types";
import { FinalProps, Variant } from "./types";

const STYLES = (isLightTheme: boolean): Record<Variant, CSSProperties> => ({
  dark: {
    color: isLightTheme ? "#0C0E16" : "#FFFFFF",
    fontWeight: 700,
  },
  light: {
    color: isLightTheme ? "#858BB2" : "#DFE3FA",
    fontWeight: 500,
  },
  saturatedLight: {
    color: isLightTheme ? "#7E88C3" : "#DFE3FA",
    fontWeight: 500,
  },
  violet: {
    color: "#7C5DFA",
    fontWeight: 700,
  },
  default: {},
});

export const Typography: FC<FinalProps> = ({
  element = "span",
  className,
  children,
  variant = "default",
  fontSize = "1.5rem",
  ...rest
}) => {
  const theme = useSelector(selectTheme);
  const isLightTheme = theme === ThemeModeEnum.LIGHT;
  const Component = element as ElementType;

  return (
    <Component
      {...rest}
      className={className}
      style={{ ...STYLES(isLightTheme)[variant], fontSize }}
    >
      {children}
    </Component>
  );
};
