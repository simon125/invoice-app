import React, { FC } from "react";
import { useGetInvoicesQuery } from "../../api/useInvoicesQuery";
import { InvoiceListItem } from "../InvoiceListItem/InvoiceListItem";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "components/Loader/Loader";

const container = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
  out: {
    opacity: 0.3,
    scale: 0.98,
    y: -20,
    transition: {
      duration: 0.1,
      delay: 0.05,
    },
  },
};

export const InvoicesList: FC = () => {
  const { isLoading, data: invoices } = useGetInvoicesQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AnimatePresence>
      {invoices?.map((invoice, index) => {
        return (
          <motion.div
            key={invoice.id}
            layout
            variants={container}
            initial="hidden"
            animate="visible"
            exit="out"
            transition={{
              delay: index * 0.05,
              type: "just",
            }}
          >
            <InvoiceListItem invoice={invoice} />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};
