import styled from "@emotion/styled";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowDownIcon } from "assets/svgs";

const StyledDropdownContainer = styled.div`
  position: relative;
  width: fit-content;
  display: inline-block;
`;

const StyledDropdownButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  display: flex;
  gap: 10px;

  &:enabled:hover {
    cursor: pointer;
  }
`;

const StyledDropdownPopup = styled(motion.div)`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  padding: 15px;
  position: absolute;
  z-index: 1;
  width: 150%;
`;

const variants: Variants = {
  hidden: { y: 18, x: "-20%", opacity: 0, scale: 0.95 },
  visible: { y: 5, x: "-20%", opacity: 1, scale: 1 },
  out: { y: 18, opacity: 0, scale: 0.95 },
};

interface DropdownProps {
  label: string;
  children: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const onOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", onOutsideClick);

    return () => document.removeEventListener("click", onOutsideClick);
  }, []);

  return (
    <StyledDropdownContainer ref={dropdownRef}>
      <StyledDropdownButton
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {label}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ArrowDownIcon />
        </motion.div>
      </StyledDropdownButton>
      <AnimatePresence>
        {isOpen && (
          <StyledDropdownPopup
            initial="hidden"
            animate="visible"
            exit="out"
            variants={variants}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {children}
          </StyledDropdownPopup>
        )}
      </AnimatePresence>
    </StyledDropdownContainer>
  );
};
