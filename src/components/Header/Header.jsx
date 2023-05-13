/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  StyledAppBar,
  StyledIconButton,
  Link,
  LanguageDropDown,
} from './styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Sidebar from 'components/Sidebar/Sidebar';
import BurgerIcon from '../../images/icons/Burger.svg';
import SignupIcon from '../../images/icons/Sign up.svg';
import ArrowDownIcon from '../../images/icons/Arrow_down.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeLang, setActiveLang] = useState('EN');
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };
  const isMobileVersion = useMediaQuery(theme.breakpoints.between('xs', 'lg'));
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  function redirectToSignIn() {
    navigate(`/sign-in`);
  }

  // const langs = ['EN', 'RU', 'UA']; // get from redux
  return (
    <>
      <StyledAppBar maxWidth={false}>
        <Link to="/">
          <Typography variant="h2">Techgen</Typography>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* language panel */}
          <LanguageDropDown src={ArrowDownIcon} />
          {isMobileVersion ? (
            // burger
            <StyledIconButton src={BurgerIcon} handler={handleToggle} />
          ) : (
            //login
            <StyledIconButton src={SignupIcon} handler={redirectToSignIn} />
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(!isDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </StyledAppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box>
          <Sidebar />
        </Box>
      </Drawer>
    </>
  );
};
