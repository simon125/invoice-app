import { FC } from 'react';
import { AppShell } from 'AppShell';
import { InvoiceDetails } from 'pages/InvoiceDetails/InvoiceDetails';
import { Invoices } from 'pages/Invoices/Invoices';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'config/routes';

export const App: FC = () => {
  return (
    <AppShell>
      <Routes>
        <Route path={ROUTES.HOME} element={<Invoices />} />
        <Route path={ROUTES.INVOICE_DETAILS(':id')} element={<InvoiceDetails />} />
      </Routes>
    </AppShell>
  );
};
