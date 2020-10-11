import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import { Link as RouterLink} from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import Header from './Header';
import image from './pic.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      horizontalAlign: 'center',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 300,
    },
    div: {
      alignItems: 'center',
      padding: '0 8px',
    },
  }));

const drawerWidth = 240;


export default function Name() {
    const classes = useStyles();
    const [name, setName] = React.useState();
    const [place, setPlace] = React.useState();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
      <CssBaseline />
      <Header classes={classes} open={open} handleDrawerOpen={handleDrawerOpen} title={"Lernen"}/>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
      <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <form className={classes.root} noValidate autoComplete="off">
            <div>
            <img src={image}/>
            <h3>
                Hallo zur ersten Lektion !
            </h3>
                <p>
            <TextField
                required
                id="name"
                placeholder="Vorname"
                variant="outlined"
                onChange = {(event) =>  setName(event.target.value)}
            />
                </p>
                <p>
            <TextField
                required
                id ="place"
                placeholder="Wohnort"
                variant="outlined"
                onChange = {(event) =>  setPlace(event.target.value)}
            />
                </p>
            <RouterLink to="/lektion" style={{ textDecoration: 'none', color: "#000000" }}>
                <Button
                    variant = "outlined"
                >
                    Weiter
                </Button>
            </RouterLink>
            </div>
        </form>
        </Container>
        </main>
    </div>
    );
}