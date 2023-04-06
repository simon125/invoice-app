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
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 5px;
    /* height: 10px; */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #cdcdcd;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #bcbcbc;
  }
`;

export const GlobalStyles: FC = () => {
  return <Global styles={globalStyles} />;
};
