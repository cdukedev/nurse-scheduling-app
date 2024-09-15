// src/components/NavigationBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

// Styled NavLink to remove default link styling
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  '&.active': {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
}));

const NavigationBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: 'Admin Dashboard', path: '/admin' },
    { title: 'Nurse Interface', path: '/nurse' },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <StyledNavLink to="/" end style={{ width: '100%' }}>
            <ListItemText primary="Home" />
          </StyledNavLink>
        </ListItem>
        {navLinks.map((item) => (
          <ListItem button key={item.title}>
            <StyledNavLink to={item.path} style={{ width: '100%' }}>
              <ListItemText primary={item.title} />
            </StyledNavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            {isMobile && (
              <>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  {drawer}
                </Drawer>
              </>
            )}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={() => (window.location.href = '/')}
            >
              Nurse Scheduling App
            </Typography>
            {!isMobile &&
              navLinks.map((item) => (
                <StyledNavLink to={item.path} key={item.title}>
                  <Button color="inherit">{item.title}</Button>
                </StyledNavLink>
              ))}
          </Toolbar>
        </AppBar>
      </Box>
      <Offset />
    </>
  );
};

export default NavigationBar;
