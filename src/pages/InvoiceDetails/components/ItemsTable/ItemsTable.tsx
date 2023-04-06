import styled from "@emotion/styled";
import { Table } from "components/Table/Table";
import { Typography } from "components/Typography/Typography";
import { FC } from "react";

import { getPriceToDisplay } from "utils/getPriceToDisplay/getPriceToDisplay";

const StyledTable = styled(Table)`
  width: 100%;
  background-color: #f9fafe;
  margin-top: 40px;
  padding: 20px;
  border-radius: 8px 8px 0 0;

  td,
  th {
    padding: 10px;
  }
` as unknown as typeof Table;

const StyledTotalOutputContainer = styled("div")`
  border-radius: 0 0 8px 8px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #373b53;
`;

const StyledLabel = styled("span")`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #ffffff;
`;

const StyledOutput = styled("span")`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;

export const ItemsTable: FC = () => {
  const data = [
    { id: "asndf1", name: "sdf", quantity: 123, price: 5 },
    { id: "asndf2", name: "rwgsd", quantity: 123, price: 5 },
    { id: "asndf3", name: "serg", quantity: 123, price: 5 },
    { id: "asndf4", name: "wergwer", quantity: 123, price: 5 },
  ];

  const getTotalPrice = (data: { quantity: number; price: number }[]) => {
    return data.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);
  };

  return (
    <>
      <StyledTable
        columns={[
          {
            field: "name",
            header: <Typography variant="saturatedLight">Item Name</Typography>,
          },
          {
            customCell: ({ quantity }) => (
              <Typography variant="saturatedLight">{quantity}</Typography>
            ),
            header: <Typography variant="saturatedLight">QTY</Typography>,
            cellAlignX: "center",
          },
          {
            customCell: ({ price }) => (
              <Typography variant="saturatedLight">
                {getPriceToDisplay(price)}
              </Typography>
            ),
            header: <Typography variant="saturatedLight">Price</Typography>,
            cellAlignX: "end",
          },
          {
            customCell: ({ price, quantity }) =>
              getPriceToDisplay(price * quantity),
            header: <Typography variant="saturatedLight">Total</Typography>,
            cellAlignX: "end",
          },
        ]}
        rows={data}
      />
      <StyledTotalOutputContainer>
        <StyledLabel>Amount Due</StyledLabel>
        <StyledOutput>{getPriceToDisplay(getTotalPrice(data))}</StyledOutput>
      </StyledTotalOutputContainer>
    </>
  );
};
