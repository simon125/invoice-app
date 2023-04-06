import styled from "@emotion/styled";
import { Typography } from "components/Typography/Typography";
import { FC } from "react";

const StyledSection = styled("section")`
  .idAndName {
    grid-area: idAndName;
  }

  .address {
    grid-area: address;
    text-align: right;
  }

  .dates {
    grid-area: dates;
  }

  .billTo {
    grid-area: billTo;
  }

  .sentTo {
    grid-area: sentTo;
  }

  .mb-30 {
    margin-bottom: 30px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }

  .mb-5 {
    margin-bottom: 5px;
  }

  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "idAndName address address"
    "dates billTo sentTo";
`;

export const DetailsMetrics: FC = () => {
  return (
    <StyledSection>
      <div className="idAndName">
        <Typography
          className="mb-10"
          element="p"
          variant="dark"
          fontSize="1.6rem"
        >
          XM9141
        </Typography>
        <Typography element="p" variant="saturatedLight">
          Graphic Design
        </Typography>
      </div>
      <div className="address">
        <Typography className="mb-5" element="p" variant="saturatedLight">
          19 Union Terrace
        </Typography>
        <Typography className="mb-5" element="p" variant="saturatedLight">
          London
        </Typography>
        <Typography className="mb-5" element="p" variant="saturatedLight">
          E1 3EZ
        </Typography>
        <Typography className="mb-5" element="p" variant="saturatedLight">
          United Kingdom
        </Typography>
      </div>

      <div className="dates">
        <Typography className="mb-10" element="p" variant="saturatedLight">
          Invoice Date
        </Typography>
        <Typography
          className="mb-30"
          element="p"
          variant="dark"
          fontSize="1.6rem"
        >
          21 Aug 2021
        </Typography>
        <Typography className="mb-10" element="p" variant="saturatedLight">
          Payment Due
        </Typography>
        <Typography element="p" variant="dark" fontSize="1.6rem">
          20 Sep 2021
        </Typography>
      </div>

      <div className="billTo">
        <Typography className="mb-10" element="p" variant="saturatedLight">
          Bill To
        </Typography>
        <Typography
          className="mb-10"
          element="p"
          variant="dark"
          fontSize="1.6rem"
        >
          Alex Grim
        </Typography>
        <Typography className="mb-5" element="p" variant="saturatedLight">
          84 Church Way
        </Typography>
        <Typography className="mb-5" element="p" variant="saturatedLight">
          Bradford
        </Typography>
        <Typography className="mb-5" element="p" variant="saturatedLight">
          BD1 9PB
        </Typography>
        <Typography element="p" variant="saturatedLight">
          United Kingdom
        </Typography>
      </div>

      <div className="sentTo">
        <Typography className="mb-10" element="p" variant="saturatedLight">
          Sent To
        </Typography>
        <Typography element="p" variant="dark" fontSize="1.6rem">
          alexgrim@mail.com
        </Typography>
      </div>
    </StyledSection>
  );
};
