import { Status } from "types/types";

export interface InvoiceListItem {
  id: string;
  date: string;
  name: string;
  price: number;
  status: Status;
}

export type InvoicesResponse = InvoiceListItem[];
