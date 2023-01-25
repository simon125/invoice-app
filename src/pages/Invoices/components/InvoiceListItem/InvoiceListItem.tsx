import styled from "@emotion/styled";
import { ArrowRightIcon } from "assets/svgs";
import { Card } from "components/Card/Card";
import { StatusIndicator } from "components/StatusIndicator/StatusIndicator";
import { InvoiceListItem as InvoiceListItemType } from "pages/Invoices/api/types";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { getFormattedDate } from "utils/getFormattedDate/getFormattedDate";
import { getPriceToDisplay } from "utils/getPriceToDisplay/getPriceToDisplay";
import { motion, usePresence } from "framer-motion";
import { useRemoveInvoiceMutation } from "pages/Invoices/api/useInvoiceMutation";

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  margin-left: 10px;
  padding: 10px;
`;

interface StyledMetricProps {
  width: string;
}

const StyledMetric = styled.span<StyledMetricProps>`
  width: ${(props) => props.width};
  text-align: center;

  &:first-of-type {
    text-align: left;
  }

  &:last-of-type {
    text-align: right;
  }

  .hash {
    color: #7e88c3;
  }
`;

interface InvoiceListItemProps {
  invoice: InvoiceListItemType;
}

export const InvoiceListItem: FC<InvoiceListItemProps> = ({ invoice }) => {
  const [mutation] = useRemoveInvoiceMutation();

  return (
    <StyledCard>
      <StyledMetric width="15%">
        <span className="hash">#</span>
        {invoice.id}
      </StyledMetric>
      <StyledMetric width="25%">
        Due {getFormattedDate(invoice.date)}
      </StyledMetric>
      <StyledMetric width="15%">{invoice.name}</StyledMetric>
      <StyledMetric width="25%">
        {getPriceToDisplay(invoice.price)}
      </StyledMetric>
      <StyledMetric width="20%">
        <StatusIndicator status={invoice.status} />
        <StyledLink to="/dupa">
          <ArrowRightIcon />
        </StyledLink>
      </StyledMetric>
    </StyledCard>
  );
};
