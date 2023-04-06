import React, { FC } from "react";
import { Grid } from "react-loader-spinner";
import styled from "@emotion/styled";
import { motion, Variants } from "framer-motion";

const StyledContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
`;

const variants: Variants = {
  initial: {},
  animate: {},
  exit: {},
};

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <StyledContainer className={className} variants={variants}>
      <Grid
        height="80"
        width="80"
        color="#7C5DFA"
        ariaLabel="grid-loading"
        radius="12.5"
        visible
      />
    </StyledContainer>
  );
};
