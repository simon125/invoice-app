import React, { FC, Fragment } from "react";
import { EmptyStateImage } from "assets/svgs";
import styled from "@emotion/styled";
import { motion, Variants } from "framer-motion";

const StyledContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const StyledHeading = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.2rem;
  text-align: center;
  color: #0c0e16;
  margin-top: 20px;
`;

const StyledSubHeading = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  color: #888eb0;
`;

const variants: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
};

interface EmptySateProps {
  heading: string;
  subHeading: string;
  className?: string;
}

export const EmptySate: FC<EmptySateProps> = ({
  heading,
  subHeading,
  className,
}) => {
  const finalSubHeading = subHeading.split("/n").map((phrase) => (
    <Fragment key={phrase}>
      {phrase}
      <br />
    </Fragment>
  ));

  return (
    <StyledContainer
      className={className}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.5 }}
    >
      <EmptyStateImage />
      {!!heading && <StyledHeading>{heading}</StyledHeading>}
      {!!subHeading && <StyledSubHeading>{finalSubHeading}</StyledSubHeading>}
    </StyledContainer>
  );
};
