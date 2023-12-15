import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './Navbar.css';
import spaceTheme from '../themes/spaceTheme';
import { ThemeProvider } from '@emotion/react';

function Navbar() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const gradient = `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={spaceTheme}>
      <AppBar position="static"
        sx={{
          background: gradient,
          p: 5
        }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navbar
          </Typography>
          {isMobile ? (
            <>
              <Button color="inherit" onClick={handleDrawerToggle}>
                Menu
              </Button>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  <ListItem>
                    <Button color="secondary">Option 1</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="inherit">Option 2</Button>
                  </ListItem>
                  <ListItem>
                    <Button color="inherit">Option 3</Button>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Button color="inherit">Option 1</Button>
              <Button color="inherit">Option 2</Button>
              <Button color="inherit">Option 3</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;

