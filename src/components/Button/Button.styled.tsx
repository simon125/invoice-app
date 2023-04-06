import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeModeEnum } from "style/types";
import { ButtonVariant, ButtonVariantConfig, StyledButtonProps } from "./types";

const isDarkTheme = (theme: ThemeModeEnum) => theme === ThemeModeEnum.DARK;

export const BUTTON_VARIANTS = (
  theme: ThemeModeEnum,
  variant: ButtonVariant
): ButtonVariantConfig =>
  ({
    dark: {
      color: isDarkTheme(theme) ? "#DFE3FA" : "#888EB0",
      hoverColor: isDarkTheme(theme) ? "#DFE3FA" : "#888EB0",
      backgroundColor: isDarkTheme(theme) ? "#373B53" : "#373B53",
      hoverBackgroundColor: isDarkTheme(theme) ? "#1E2139" : "#0C0E16",
    },
    light: {
      color: isDarkTheme(theme) ? "#DFE3FA" : "#7E88C3",
      hoverColor: isDarkTheme(theme) ? "#252945" : "#7E88C3",
      backgroundColor: isDarkTheme(theme) ? "#252945" : "#e5e6ec",
      hoverBackgroundColor: isDarkTheme(theme) ? "#F2F2F2" : "#d9dcf1",
    },
    red: {
      color: "#FFFFFF",
      hoverColor: "#FFFFFF",
      backgroundColor: "#EC5757",
      hoverBackgroundColor: "#FF9797",
    },
    violet: {
      color: "#FFFFFF",
      hoverColor: "#FFFFFF",
      backgroundColor: "#7C5DFA",
      hoverBackgroundColor: "#9277FF",
    },
  }[variant]);

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 2em;
  padding: 1em 2em;
  font-size: 1.4rem;
  border: none;
  position: relative;
  width: fit-content;
  color: ${({ variantConfig }) => variantConfig.color};
  background-color: ${({ variantConfig }) => variantConfig.backgroundColor};
  transition: all 0.2s;
  background-position: center;

  &:enabled:hover {
    cursor: pointer;
    color: ${({ variantConfig }) => variantConfig.hoverColor};
    background-color: ${({ variantConfig }) =>
      variantConfig.hoverBackgroundColor};
  }

  ${({ icon }) =>
    icon &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.2em 1.5em 0.2em 0.2em;
      gap: 10px;
    `}

  ${({ block }) =>
    block === true &&
    css`
      width: 100%;
    `}
`;
