import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.backgrounds.primary};
  border: 8px;
  padding: 30px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
`;

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};
