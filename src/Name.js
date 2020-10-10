import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export default function Name() {
    const classes = useStyles();
    const [name, setName] = React.useState();
    const [place, setPlace] = React.useState();
    return (
    <form className={classes.root} noValidate autoComplete="off">
        <p>
            Bitte gib deinen Vornamen und deinen Wohnort an.
        </p>
        <div>
        <TextField
            required
            id="name"
            label="Required"
            placeholder="Vorname"
            variant="outlined"
            onChange = {(event) =>  setName(event.target.value)}
        />
        <TextField
            required
            id ="place"
            label="Required"
            placeholder="Wohnort"
            variant="outlined"
            onChange = {(event) =>  setPlace(event.target.value)}
        />
        <Button 
            onClick={() => { alert(name+ place) }}
            variant = "outlined"
            
        >
            Weiter
        </Button>    
        </div>
    </form>
    );
}