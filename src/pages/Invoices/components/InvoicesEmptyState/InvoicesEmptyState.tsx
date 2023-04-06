import { EmptySate } from "components/EmptyState/EmptySate";
import React from "react";
import styled from "@emotion/styled";

const StyledEmptyState = styled(EmptySate)`
  margin-top: 15vh;
`;

export const InvoicesEmptyState = () => {
  return (
    <StyledEmptyState
      heading="There is nothing here"
      subHeading="Create an invoice by clicking the /n New Invoice button and get started"
    />
  );
};
