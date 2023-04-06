import styled from "@emotion/styled";

const TextField = styled("input")`
  border: 1px solid #dfe3fa;
  border-radius: 4px;
  padding: 10px;
  font-size: 1.5rem;
  color: #0c0e16;
  outline: none;
  width: 100%;

  &:focus {
    border: 1px solid #9277ff;
  }
`;

TextField.displayName = "TextField";

export { TextField };
