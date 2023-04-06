import { FC } from "react";
import { useGetInvoicesQuery } from "./api/useInvoicesQuery";
import { InvoiceFilters } from "./components/InvoiceFiters/InvoiceFilters";
import { InvoicesList } from "./components/InvoicesList/InvoicesList";
import styled from "@emotion/styled";
import { Button } from "components/Button/Button";
import { InvoiceForm } from "pages/InvoiceForm/InvoiceForm";
import { useFormDrawer } from "pages/InvoiceForm/hooks/useFormDrawer";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7vh;

  .controls-container {
    display: flex;
    align-items: center;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 20px;
`;

const StyledHeading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.6rem;
  letter-spacing: -0.1rem;
  color: #0c0e16;
`;

const StyledSubHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  color: #888eb0;
`;

export const Invoices: FC = () => {
  const { data: invoices } = useGetInvoicesQuery();
  const { toggleFormDrawer } = useFormDrawer();

  return (
    <>
      <StyledHeader>
        <div>
          <StyledHeading>Invoices</StyledHeading>
          <StyledSubHeading>{`There are ${
            invoices?.length || 0
          } total invoices`}</StyledSubHeading>
        </div>
        <div className="controls-container">
          <InvoiceFilters />
          <StyledButton icon="plusCircle" onClick={toggleFormDrawer}>
            New Invoice
          </StyledButton>
        </div>
      </StyledHeader>

      <InvoicesList />

      <InvoiceForm />
    </>
  );
};
