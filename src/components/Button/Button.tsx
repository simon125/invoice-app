import { FC } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "style/slice";
import { StyledButton, BUTTON_VARIANTS } from "./Button.styled";
import { BUTTONS_ICONS } from "./ButtonIcons";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  variant = "violet",
  children,
  icon,
  ...rest
}) => {
  const theme = useSelector(selectTheme);
  return (
    <StyledButton
      variant={variant}
      variantConfig={BUTTON_VARIANTS(theme, variant)}
      icon={!!icon}
      {...rest}
    >
      {!!icon && <span className="icon">{BUTTONS_ICONS[icon]}</span>}
      {children}
    </StyledButton>
  );
};
