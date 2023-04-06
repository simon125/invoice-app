import styled from "@emotion/styled";
import { Card } from "components/Card/Card";
import { FC } from "react";
import { motion, Variants } from "framer-motion";

import { Actions } from "./components/Actions";
import { BackHomeLink } from "./components/BackHomeLink";
import { DetailsMetrics } from "./components/DetailsMetrics";
import { ItemsTable } from "./components/ItemsTable";
import { Status } from "./components/Status";
import { InvoiceForm } from "pages/InvoiceForm/InvoiceForm";

const StyledCard = styled(Card)`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const variants: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  animate: { y: 0, opacity: 1, scale: 1 },
};

export const InvoiceDetails: FC = () => {
  return (
    <>
      <BackHomeLink />
      <motion.div
        initial="hidden"
        animate="animate"
        transition={{ delay: 0.2 }}
        variants={variants}
      >
        <StyledCard>
          <Status />
          <Actions />
        </StyledCard>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="animate"
        transition={{ delay: 0.4 }}
        variants={variants}
      >
        <Card>
          <DetailsMetrics />
          <ItemsTable />
        </Card>
      </motion.div>

      <InvoiceForm />
    </>
  );
};
