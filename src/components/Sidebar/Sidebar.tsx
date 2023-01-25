import { FC } from "react";
import { Logo, MoonIcon, SunIcon } from "assets/svgs";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "style/slice";
import { ThemeModeEnum } from "style/types";
import styled from "@emotion/styled";

const StyledSidebarContainer = styled.div`
  background-color: #373b53;
  height: 100vh;
  width: 103px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 20px 20px 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;

const StyledThemeSwitch = styled.button`
  background-color: transparent;
  border: none;
  margin-bottom: 50px;
`;

export const Sidebar: FC = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleToggleThemeClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledSidebarContainer>
      <Logo />
      <StyledThemeSwitch onClick={handleToggleThemeClick}>
        {theme === ThemeModeEnum.LIGHT ? <SunIcon /> : <MoonIcon />}
      </StyledThemeSwitch>
    </StyledSidebarContainer>
  );
};
