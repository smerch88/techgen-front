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
import SignupIcon from '../../images/icons/Sign up.svg';
import { Box, Divider, Menu, MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { logout } from 'helpers/session';

const UserActions = () => {
  const navigate = useNavigate();
  const {isAuthorized, user} = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout('/sign-in');
    handleClose();
  }

  if(!isAuthorized) return (
    <StyledIconButton onClick={() => navigate(`/sign-in`)}>
      <Box component="img" src={SignupIcon} />
    </StyledIconButton>
  )

  return(
    <Box sx={{position: 'relative'}}>
      <StyledIconButton onClick={handleClick} >
        <Box>{user?.role[0] || "U"}</Box>
      </StyledIconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 'max-content',
            width: 'max-content',
          },
        }}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      >
        <MenuItem disabled>Profile</MenuItem>
        <Divider color="#fff" variant={'middle'}/>
        <MenuItem sx={( theme ) => ({color: theme.palette.text.secondary})} onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}

export const Header = () => {
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

  // const langs = ['EN', 'RU', 'UA']; // get from redux
  return (
    <>
      <StyledAppBar>
        <Link to="/">
          <Typography variant="h2">Techgen</Typography>
        </Link>
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* language panel */}
          <LanguageDropDown />
          <Divider orientation="vertical" color="#fff" variant={'middle'} flexItem/>
          {/*login*/}
          <UserActions />
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
