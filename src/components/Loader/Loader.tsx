import React, { FC } from "react";
import { Grid } from "react-loader-spinner";

export const Loader: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "20vh",
      }}
    >
      <Grid
        height="80"
        width="80"
        color="#7C5DFA"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
