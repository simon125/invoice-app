import { FC } from "react";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  html {
    font-size: 62.5%;
  }
  *,
  html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "League Spartan", sans-serif;
  }

  body {
    font-size: 1.4rem;
  }
`;

export const GlobalStyles: FC = () => {
  return <Global styles={globalStyles} />;
};
