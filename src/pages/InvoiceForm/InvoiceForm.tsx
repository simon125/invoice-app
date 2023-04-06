import { Drawer } from "components";
import { DatePicker } from "components/DatePicker/DatePicker";
import { FC } from "react";
import { useFormDrawer } from "./hooks/useFormDrawer";

import {
  useForm,
  Controller,
  SubmitHandler,
  useFieldArray,
  useWatch,
} from "react-hook-form";
import { TextField } from "components/TextField/TextField";
import styled from "@emotion/styled";
import { Typography } from "components/Typography/Typography";
import { Button } from "components/Button/Button";
// import { Table } from "components/Table/Table";
import { Select } from "components/Select/Select";
import { Table } from "components/Table/Table";
import { ServiceItem } from "types/types";
import { TrashIcon } from "assets/svgs";

const StyledTable = styled(Table)`
  margin-top: 20px;
  margin-bottom: 30px;

  td + td,
  th + th {
    padding-left: 10px;
  }

  tbody tr td {
    padding-top: 15px;
  }
` as unknown as typeof Table;

const StyledLabel = styled("label")`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 20px;
`;

const IconButton = styled("button")`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 5px;

  path {
    transition: all 0.15s;
  }

  &:hover path {
    fill: #e30c0c;
  }
`;

const QtyInput = styled(TextField)``;

const Output = styled(TextField)`
  border: none;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  margin-right: 5px;
`;

interface ContainerProps {
  columnsNumber?: number;
}

const Container = styled("div")<ContainerProps>`
  display: grid;
  justify-content: space-between;
  gap: 10px;
  grid-template-columns: ${({ columnsNumber = 3 }) =>
    Array(columnsNumber).fill("1fr").join(" ")};
`;

const StyledTypography = styled(Typography)`
  margin: 15px 0;
`;

interface FormState {
  date: Date;
  items: ServiceItem[];
}

interface InvoiceFormProps {}

export const InvoiceForm: FC<InvoiceFormProps> = () => {
  const { isFormDrawerOpen, toggleFormDrawer } = useFormDrawer();

  const { control, register, handleSubmit, getValues } = useForm({
    defaultValues: {
      date: new Date(),
      items: [] as ServiceItem[],
    },
  });

  const firstName = useWatch({
    control,
    name: "items", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: [], // default value before the render
  });

  const { fields, append, remove } = useFieldArray({
    control,
    // @ts-ignore
    name: "items",
  });

  const onSubmit: SubmitHandler<FormState> = (data) => {
    console.log(data);
  };

  return (
    <Drawer isDrawerOpen={isFormDrawerOpen} onBackdropClick={toggleFormDrawer}>
      <div
        style={{
          overflowY: "auto",
          height: "calc(97vh - 100px)",
          paddingRight: 30,
        }}
      >
        <Typography element="h2" fontSize="2.4rem" variant="dark">
          New Invoice
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <StyledTypography element="h2" variant="violet">
              Bill From
            </StyledTypography>

            <StyledLabel>
              <Typography variant="light">Street Address</Typography>
              <TextField />
            </StyledLabel>

            <Container>
              <StyledLabel>
                <Typography variant="light">City</Typography>
                <TextField />
              </StyledLabel>

              <StyledLabel>
                <Typography variant="light">Post Code</Typography>
                <TextField />
              </StyledLabel>

              <StyledLabel>
                <Typography variant="light">Country</Typography>
                <TextField />
              </StyledLabel>
            </Container>
          </section>

          <section>
            <StyledTypography element="h2" variant="violet">
              Bill To
            </StyledTypography>

            <StyledLabel>
              <Typography variant="light">Client's Name</Typography>
              <TextField />
            </StyledLabel>

            <StyledLabel>
              <Typography variant="light">Client's Email</Typography>
              <TextField />
            </StyledLabel>

            <StyledLabel>
              <Typography variant="light">Street Address</Typography>
              <TextField />
            </StyledLabel>

            <Container>
              <StyledLabel>
                <Typography variant="light">City</Typography>
                <TextField />
              </StyledLabel>

              <StyledLabel>
                <Typography variant="light">Post Code</Typography>
                <TextField />
              </StyledLabel>

              <StyledLabel>
                <Typography variant="light">Country</Typography>
                <TextField />
              </StyledLabel>
            </Container>

            <Container columnsNumber={2}>
              <StyledLabel>
                <Typography variant="light">Invoice Date</Typography>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      selected={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </StyledLabel>

              <StyledLabel htmlFor="dupa">
                <Typography variant="light">Payment Terms</Typography>
                <Select id="dupa" />
              </StyledLabel>
            </Container>

            <StyledLabel>
              <Typography variant="light">Project Description</Typography>
              <TextField />
            </StyledLabel>
          </section>

          <section>
            <Typography fontSize="2rem" variant="light">
              Item List
            </Typography>

            <StyledTable
              rows={fields}
              columns={[
                {
                  customCell: (_, rowIndex) => (
                    <TextField
                      type="text"
                      {...register(`items.${rowIndex}.name`)}
                    />
                  ),
                  field: "id",
                  header: "Item Name",
                  style: { width: "40%" },
                },
                {
                  customCell: (_, rowIndex) => (
                    <QtyInput
                      type="text"
                      {...register(`items.${rowIndex}.quantity`)}
                    />
                  ),
                  field: "id",
                  header: "Qty.",
                  style: { width: "10%" },
                },
                {
                  customCell: (_, rowIndex) => (
                    <TextField
                      type="text"
                      {...register(`items.${rowIndex}.price`)}
                    />
                  ),
                  field: "id",
                  header: "Price",
                  style: { width: "20%" },
                },
                {
                  customCell: ({ price, quantity }, i) => (
                    <Output
                      type="text"
                      readOnly
                      value={
                        Number(getValues().items[i].price) *
                        Number(getValues().items[i].quantity)
                      }
                    />
                  ),
                  field: "id",
                  header: "Total",
                  style: { width: "20%" },
                },
                {
                  customCell: ({ price, quantity }, rowIndex) => (
                    <IconButton
                      onClick={() => {
                        remove(rowIndex);
                      }}
                    >
                      <TrashIcon />
                    </IconButton>
                  ),
                  field: "id",
                  header: "",
                  style: { width: "10%" },
                },
              ]}
            />
            <Button
              variant="light"
              block
              onClick={() => {
                append({ name: "", price: "", quantity: "" });
              }}
            >
              + Add New Item
            </Button>
          </section>

          <section
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "10px 40px 20px 40px",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              // boxShadow: "10px 2px 10px 10px rgba(72, 84, 159, 0.100397)",
            }}
          >
            <Button type="reset" variant="light">
              Discard
            </Button>
            <StyledButton type="submit" name="saveAsDraft" variant="dark">
              Save as Draft
            </StyledButton>
            <Button type="submit" variant="violet">
              Save & Send
            </Button>
          </section>
        </form>
      </div>
    </Drawer>
  );
};
