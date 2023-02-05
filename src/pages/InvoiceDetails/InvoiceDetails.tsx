import styled from '@emotion/styled';
import { Card } from 'components/Card/Card';
import { FC } from 'react';

import { Actions } from './components/Actions';
import { BackHomeLink } from './components/BackHomeLink';
import { DetailsMetrics } from './components/DetailsMetrics';
import { ItemsTable } from './components/ItemsTable';
import { Status } from './components/Status';

const StyledCard = styled(Card)`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InvoiceDetails: FC = () => {
  return (
    <>
      <BackHomeLink />
      <StyledCard>
        <Status />
        <Actions />
      </StyledCard>
      <Card>
        <DetailsMetrics />
        <ItemsTable />
      </Card>
    </>
  );
};
