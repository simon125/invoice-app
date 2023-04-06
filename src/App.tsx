import { FC } from "react";
import { AppShell } from "AppShell";
import { InvoiceDetails } from "pages/InvoiceDetails/InvoiceDetails";
import { Invoices } from "pages/Invoices/Invoices";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "config/routes";
import { AnimatePresence } from "framer-motion";

export const App: FC = () => {
  const location = useLocation();
  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.HOME} element={<Invoices />} />
          <Route
            path={ROUTES.INVOICE_DETAILS(":id")}
            element={<InvoiceDetails />}
          />
        </Routes>
      </AnimatePresence>
    </AppShell>
  );
};
