import styled from "@emotion/styled";
import { TextField } from "components/TextField/TextField";
import { motion, AnimatePresence, Variants } from "framer-motion";
import React, { FC, useRef, useState } from "react";

import ReactDatePicker from "react-datepicker";

const StyledContainer = styled("div")`
  position: relative;
  * {
    font-size: 1.4rem;
  }

  .react-datepicker {
    border: none;
  }

  .react-datepicker__header {
    background-color: white;
    min-height: 50px;
    border: none;
  }

  .react-datepicker__day-names {
    display: none;
  }

  .react-datepicker__navigation-icon::before {
    border-color: #7c5dfa;
    border-width: 2px 2px 0 0;
    width: 5px;
    height: 5px;
  }

  .react-datepicker__current-month {
    line-height: 27px;
    color: #0c0e16;
  }

  .react-datepicker__month {
    padding: 0 10px 10px 10px;
  }

  .react-datepicker__month-container {
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    border-radius: 8px;
    border: none;
    background-color: white;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__day {
    padding: 5px;
    width: 2.3rem;
    color: #0c0e16;
  }

  .react-datepicker__day--selected {
    background-color: transparent;
    color: #7c5dfa;
  }
`;

const variants: Variants = {
  hidden: { y: 18, opacity: 0, scale: 0.95 },
  visible: { y: 5, opacity: 1, scale: 1 },
  out: { y: 18, opacity: 0, scale: 0.95 },
};

interface DatePickerProps {
  onChange: (date: Date | null) => void;
  selected?: Date | null | undefined;
}

export const DatePicker: FC<DatePickerProps> = React.forwardRef<
  ReactDatePicker,
  DatePickerProps
>(({ selected, onChange }, ref) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <StyledContainer>
      <TextField
        ref={inputRef}
        readOnly
        value={(selected || new Date()).toDateString()}
        onFocus={() => {
          if (!open) {
            setOpen(true);
          }
        }}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="out"
            variants={variants}
            transition={{ type: "spring", stiffness: 120 }}
            style={{ position: "absolute", zIndex: 100 }}
          >
            <ReactDatePicker
              ref={ref}
              inline
              onClickOutside={() => setOpen(false)}
              selected={selected}
              onChange={onChange}
              popperPlacement="auto"
              portalId="date-picker"
              withPortal
            />
          </motion.div>
        )}
      </AnimatePresence>
    </StyledContainer>
  );
});
