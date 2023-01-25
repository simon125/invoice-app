import styled from "@emotion/styled";
import { Checkbox } from "components/Checkbox/Checkbox";
import { Dropdown } from "components/Dropdown/Dropdown";
import React, { FC } from "react";

const StyledCheckbox = styled(Checkbox)`
  & + & {
    margin-top: 10px;
  }
`;

export const InvoiceFilters: FC = () => {
  return (
    <Dropdown label="Filter by status">
      <StyledCheckbox label="Draft" />
      <StyledCheckbox label="Pending" />
      <StyledCheckbox label="Paid" />
    </Dropdown>
  );
};
