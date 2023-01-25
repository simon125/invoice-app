import styled from "@emotion/styled";
import { Sidebar } from "components";
import { Card } from "components/Card/Card";
import { FC, ReactNode } from "react";

const AppShellContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgrounds.secondary};
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 7vh;
  display: flex;
  align-items: top;
  justify-content: center;

  main {
    width: 60%;
  }
`;
interface AppShellProps {
  children: ReactNode;
}

export const AppShell: FC<AppShellProps> = ({ children }) => {
  return (
    <AppShellContainer>
      <aside>
        <Sidebar />
      </aside>
      <ContentContainer>
        <main>{children}</main>
      </ContentContainer>
    </AppShellContainer>
  );
};
