import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';


export default function Header(props) {
    return (
        <AppBar position="absolute" style={{ background: '#1d2d60' }} className={clsx(props.classes.appBar, props.open && props.classes.appBarShift)}>
        <Toolbar className={props.classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            className={clsx(props.classes.menuButton, props.open && props.classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={props.classes.title}>
            {"Verbalize " + props.title}
          </Typography>
          <Avatar alt="Anna" src={process.env.PUBLIC_URL + "/avatar.JPG"} />
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}