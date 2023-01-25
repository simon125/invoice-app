import { api } from "store/api";

const invoicesApi = api.injectEndpoints({
  endpoints: (build) => ({
    removeInvoice: build.mutation<unknown, { id: string }>({
      query({ id }) {
        return {
          url: `/invoices/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["INVOICES"],
    }),
  }),
});

export const { useRemoveInvoiceMutation } = invoicesApi;
