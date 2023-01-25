import { format } from "date-fns";

export const getFormattedDate = (
  date: string,
  expectedFormat = "dd MMM yyyy"
) => {
  return format(new Date(date), expectedFormat);
};
