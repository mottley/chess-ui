import React, { FunctionComponent, useState } from 'react';
import { AppHeaderProps } from './AppHeader.types';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, createStyles, makeStyles, Theme } from '@material-ui/core';
import { RouteNames } from '../../routes/routes';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'react-router5';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerVO } from '../../models/PlayerVO';
import { IApplicationStore } from '../../redux/store/store.types';
import { LogoutAction } from '../../redux/actions/AuthenticationAction';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginLogoutButton: {
      marginRight: theme.spacing(2),
      color: 'white'
    },
    title: {
      flexGrow: 1
    },
    zip: {
      marginRight: theme.spacing(4)
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 240,
    },
  })
);

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
    label: 'Game History',
    route: RouteNames.History
  },
  {
    label: 'Leaderboard',
    route: RouteNames.Leaderboard
  }
]

export const AppHeader: FunctionComponent<AppHeaderProps> = props => {

  const classes = useStyles();

  const router = useRouter();
  const dispatch = useDispatch();

  const [drawerOpen, setDrawerOpen] = useState(false);
  // const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const authenticatedPlayer = useSelector<IApplicationStore, PlayerVO | undefined>(store => store.chess.auth.player)

  const isLoggedIn = !!authenticatedPlayer

  const onNavigationOptionClick = (option: NavigationOption) => {
    router.navigate(option.route)
    setDrawerOpen(false)
    // setProfileMenuOpen(false)
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
        <Typography variant="h6" className={classes.title}>
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

        {isLoggedIn ?
          <Button
            className={classes.loginLogoutButton}
            onClick={() => dispatch(new LogoutAction())}
          >
            Logout
          </Button>
          :
          <Button
            className={classes.loginLogoutButton}
            onClick={() => router.navigate(RouteNames.Login)}
          >
            Login
          </Button>
        }
      </Toolbar>
    </AppBar>
  );
}