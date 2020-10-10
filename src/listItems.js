import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/" style={{ textDecoration: 'none', color: "#000000" }}>
        <ListItem button>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Übersicht" />
        </ListItem>
    </Link>
    <Link to="/lernen" style={{ textDecoration: 'none', color: "#000000" }}>
    <ListItem button>
      <ListItemIcon>
        <LocalLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Lernen" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
  </div>
);