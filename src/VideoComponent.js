import React from 'react';
import { Player } from 'video-react';

import "../node_modules/video-react/dist/video-react.css";
import Button from "@material-ui/core/Button";
import {Link as RouterLink} from "react-router-dom";

import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import DiscreteSlider from "./Slider";
import Collapsible from "react-collapsible";
import './Collapsible.css';

const pictures = [{name:'Ich bin A-N-N-A.',
    url : [process.env.PUBLIC_URL + '/Anna_Ich.png', process.env.PUBLIC_URL + '/Anna_bin.png', process.env.PUBLIC_URL + '/Anna_A.png',
        process.env.PUBLIC_URL + '/Anna_N.png', process.env.PUBLIC_URL + '/Anna_N.png', process.env.PUBLIC_URL + '/Anna_A.png']},
    {name: 'Ich bin <Namensschild>. Ich wohne in Pforzheim.',
        url : [process.env.PUBLIC_URL + '/Pham_Ich.png', process.env.PUBLIC_URL + '/Pham_bin.png', process.env.PUBLIC_URL + '/Pham_Name.png',
            process.env.PUBLIC_URL + '/Pham_Ich.png', process.env.PUBLIC_URL + '/Pham_wohne.png', process.env.PUBLIC_URL + '/Pham_in.png', process.env.PUBLIC_URL + '/Pham_Pforzheim.png']},
    {name: 'Vielen Dank!',
        url : [process.env.PUBLIC_URL + '/Pham_vielen.png', process.env.PUBLIC_URL + '/Pham_Dank.png']},
    {name: 'Willkommen!',
        url : [process.env.PUBLIC_URL + '/Pham_willkommen.png']}
]

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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
  }));

const drawerWidth = 240;

export default function Video(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const currentCombo = pictures[props.counter_img].url;
    return (
        <div className={classes.root}>
            <CssBaseline/>
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
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>{mainListItems}</List>
                <Divider/>
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <h1>Deine nächste Gebärde: {props.word}</h1>
                    <Player
                        playsInline
                        src={props.videoUrl}
                        width="70%"
                    />
                    <div style={{padding: '10px'}}>
                    <Collapsible trigger="Bildertutorial" >
                        <div>
                            <ul>
                                {currentCombo.map(function (picture_url){
                                    return <img src={picture_url}/>
                                })}
                            </ul>
                            <p> {pictures[props.counter_img].name}</p>
                        </div>
                    </Collapsible>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <DiscreteSlider/>
                    </div>
                    <p>
                        <RouterLink to="/lektion" style={{textDecoration: 'none', color: "#000000"}}>
                            <Button
                                variant="outlined"
                            >
                                Ich bin fertig!
                            </Button>
                        </RouterLink>
                    </p>
                </Container>
            </main>
        </div>
    )
}
