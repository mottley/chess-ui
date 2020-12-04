import React, { FunctionComponent, useState } from 'react';
import { AppHeaderProps } from './AppHeader.types';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { RouteNames } from '../../routes/routes';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'react-router5';

interface NavigationOption {
  icon?: React.ReactElement
  label: string
  route: string
}

const navOptions: NavigationOption[] = [
  {
    // icon: <HomeIcon />,
    label: 'Login',
    route: RouteNames.Login
  },
  {
    // icon: <ShoppingCartIcon />,
    label: 'Lobby',
    route: RouteNames.Lobby
  },
  {
    label: 'History',
    route: RouteNames.History
  }
]

export const AppHeader: FunctionComponent<AppHeaderProps> = props => {

  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onNavigationOptionClick = (option: NavigationOption) => {
    router.navigate(option.route)
    setDrawerOpen(false)
    setProfileMenuOpen(false)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Chess
        </Typography>

        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        // classes={{
        //   paper: classes.drawerPaper,
        // }}
        >
          <div
          // className={classes.toolbar}
          >
            <List>
              {navOptions.map(o =>
                <ListItem
                  button
                  key={o.label}
                  onClick={() => onNavigationOptionClick(o)}
                >
                  <ListItemIcon>{o.icon}</ListItemIcon>
                  <ListItemText primary={o.label} />
                </ListItem>
              )}
            </List>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}