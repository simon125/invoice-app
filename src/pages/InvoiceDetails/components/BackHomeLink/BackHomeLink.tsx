import { FC } from "react";
import { ArrowLeftIcon } from "assets/svgs";
import { ROUTES } from "config/routes";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #0c0e16;

  &:hover {
    color: #7e88c3;
  }
`;

export const BackHomeLink: FC = () => {
  return (
    <StyledLink to={ROUTES.HOME}>
      <ArrowLeftIcon className="icon" /> Go back
    </StyledLink>
  );
};
