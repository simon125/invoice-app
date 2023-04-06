import { useSelect } from "downshift";
import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

import { TextField } from "components/TextField/TextField";
import { ArrowDownIcon } from "assets/svgs";

const StyledOptions = styled(motion.ul)`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  list-style: none;
  width: 100%;
  max-height: 176px;
  overflow: auto;
`;

interface StyledOptionProps {
  isSelected: boolean;
  isHighlightedIndex: boolean;
}

const StyledOption = styled("li")<StyledOptionProps>`
  /* border-top: 1px solid transparent; */
  padding: 15px 20px;
  color: ${({ isSelected }) => (isSelected ? "#7C5DFA" : "#0C0E16")};
  background-color: ${({ isHighlightedIndex }) =>
    isHighlightedIndex ? "#eeeeee99" : "transparent"};

  li:nt {
    border-top: 1px solid #979797;
  }
`;

const StyledInputContainer = styled("div")`
  position: relative;
`;

const StyledIconContainer = styled(motion.div)`
  position: absolute;
  top: 30%;
  right: 10px;
`;

export const Select: FC<{ id?: string }> = ({ id }) => {
  const books = [
    { label: "Harper Lee", value: "To Kill a Mockingbird" },
    { label: "Lev Tolstoy", value: "War and Peace" },
    { label: "Fyodor Dostoyevsy", value: "The Idiot" },
    { label: "Oscar Wilde", value: "A Picture of Dorian Gray" },
    { label: "George Orwell", value: "1984" },
    { label: "Jane Austen", value: "Pride and Prejudice" },
  ];

  const {
    isOpen,
    selectedItem,
    highlightedIndex,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    onStateChange: ({}) => {},
    items: books,
    itemToString: (item) => item?.label || "",
  });

  return (
    <div style={{ position: "relative" }}>
      <StyledInputContainer>
        <TextField
          {...getToggleButtonProps()}
          value={(selectedItem && selectedItem.label) || ""}
          readOnly
        />
        <StyledIconContainer animate={{ rotate: isOpen ? 180 : 0 }}>
          <ArrowDownIcon />
        </StyledIconContainer>
      </StyledInputContainer>
      <div {...getMenuProps()}>
        <AnimatePresence>
          {isOpen && (
            <StyledOptions
              style={{ position: "absolute" }}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {books.map((item, index) => (
                <StyledOption
                  isSelected={selectedItem?.label === item.label}
                  isHighlightedIndex={highlightedIndex === index}
                  key={`${item.value}${index}`}
                  {...getItemProps({ item, index })}
                >
                  {item.label}
                </StyledOption>
              ))}
            </StyledOptions>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
