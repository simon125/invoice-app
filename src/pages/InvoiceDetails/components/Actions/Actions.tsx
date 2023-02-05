import styled from '@emotion/styled';
import { Button } from 'components/Button/Button';
import { FC } from 'react';

const StyledContainer = styled('div')`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Actions: FC = () => {
  return (
    <StyledContainer>
      <Button variant="light">Edit</Button>
      <Button variant="red">Delete</Button>
      <Button>Mark as Paid</Button>
    </StyledContainer>
  );
};
