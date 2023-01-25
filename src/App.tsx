import { FC } from "react";
import { AppShell } from "AppShell";
import { InvoiceDetails } from "pages/InvoiceDetails/InvoiceDetails";
import { Invoices } from "pages/Invoices/Invoices";
import { Route, Routes } from "react-router-dom";

export const App: FC = () => {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Invoices />} />
        <Route path="/invoices/:id" element={<InvoiceDetails />} />
      </Routes>
    </AppShell>
  );
};
