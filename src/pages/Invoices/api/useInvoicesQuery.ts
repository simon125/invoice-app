import { api } from "store/api";
import { InvoicesResponse } from "./types";

const invoicesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getInvoices: build.query<InvoicesResponse, void>({
      query() {
        return {
          url: "/invoices",
        };
      },
      providesTags: ["INVOICES"],
    }),
  }),
});

export const { useGetInvoicesQuery } = invoicesApi;
