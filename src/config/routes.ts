export const ROUTES = {
  HOME: "/",
  NEW_INVOICE: "new-invoice",
  EDIT_INVOICE: "edit-invoice",
  INVOICE_DETAILS: (id: string) => `invoices/${id}`,
};
