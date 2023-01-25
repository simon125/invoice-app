import styled from "@emotion/styled";
import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { ReactComponent as CheckboxIcon } from "./checkbox.svg";

interface StyledLabelProps {
  disabled?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  & * {
    transition: all 0.15s;
  }

  span {
    margin-left: 10px;
    font-weight: 700;
    font-size: 1.4rem;
  }

  input:checked + svg .unCheckedIcon {
    display: none;
  }

  input:not(:checked) + svg .checkedIcon {
    display: none;
  }

  svg .unCheckedIcon {
    stroke: transparent;
  }

  &:hover input:not(:checked) + svg .unCheckedIcon {
    stroke: ${(props) => (props.disabled ? "transparent" : "#7c5dfa")};
  }

  .unCheckedIcon {
    fill: ${(props) => props.theme.backgrounds.checkbox};
  }
`;

type CheckboxProps = { label?: string } & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { className, label } = props;

  return (
    <StyledLabel className={className} disabled={props.disabled}>
      <input {...props} hidden type="checkbox" className="" />
      <CheckboxIcon />
      {!!label && <span>{label}</span>}
    </StyledLabel>
  );
};
