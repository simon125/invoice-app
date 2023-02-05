import { FC } from 'react';
import styled from '@emotion/styled';
import { StatusIndicator } from 'components/StatusIndicator/StatusIndicator';

const StyledContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLabel = styled('span')`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rm;
  color: #858bb2;
`;

export const Status: FC = () => {
  return (
    <StyledContainer>
      <StyledLabel>Status</StyledLabel>
      <StatusIndicator status="pending" />
    </StyledContainer>
  );
};
