import { FC, ReactNode } from "react";

import { motion, AnimatePresence, Variants } from "framer-motion";

const variants: Variants = {
  animate: {
    opacity: 1,
    left: "90px",
    top: 0,
  },
  initial: {
    opacity: 0,
    left: "-40vw",
    top: 0,
  },
  exit: {
    opacity: 0,
    left: "-40vw",
    top: 0,
  },
};

const variantsBackdrop: Variants = {
  animate: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

interface DrawerProps {
  isDrawerOpen: boolean;
  onBackdropClick: () => void;
  children: ReactNode;
}

export const Drawer: FC<DrawerProps> = ({
  isDrawerOpen,
  onBackdropClick,
  children,
}) => {
  return (
    <>
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              style={{
                width: "100vw",
                height: "100vh",
                background: "#00000088",
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              variants={variantsBackdrop}
              onClick={onBackdropClick}
              animate="animate"
              initial="initial"
              exit="exit"
              transition={{ type: "just" }}
            />
            <motion.div
              style={{
                position: "fixed",
                width: "42vw",
                top: 0,
                bottom: 0,
                background: "#fefefe",
                padding: "50px 20px 20px 60px",
                // paddingRight: 20,
                borderRadius: "0 20px 20px 0",
              }}
              variants={variants}
              transition={{ delay: 0.2, type: "just" }}
              animate="animate"
              initial="initial"
              exit="exit"
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
