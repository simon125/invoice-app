import styled from "@emotion/styled";
import React, { FC } from "react";
import { Status } from "types/types";

const VARIANTS_COLORS: Record<Status, { color: string; background: string }> = {
  draft: { background: "#373B5322", color: "#373B53" },
  paid: { background: "#33D69F22", color: "#33D69F" },
  pending: { background: "#FF8F0022", color: "#FF8F00" },
};

interface StyledStatusIndicatorProps {
  variant: Status;
}

const StyledStatusIndicator = styled.div<StyledStatusIndicatorProps>`
  color: ${(props) => VARIANTS_COLORS[props.variant].color};
  background-color: ${(props) => VARIANTS_COLORS[props.variant].background};
  text-transform: capitalize;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 104px;
  padding: 15px 20px;
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.5rem;

  span {
    font-size: 2rem;
    margin-right: 5px;
  }
`;

interface StatusIndicatorProps {
  status: Status;
}

export const StatusIndicator: FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <StyledStatusIndicator variant={status}>
      <span>&bull;</span> {status}
    </StyledStatusIndicator>
  );
};
