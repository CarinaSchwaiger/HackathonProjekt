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
    return (
    <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
            required
            id="name"
            label="Required"
            defaultValue="Vorname"
            variant="outlined"
        />
        <TextField
            required
            id ="place"
            label="Required"
            defaultValue="Wohnort"
            variant="outlined"
            onChange = {(event) => }
        />
        <Button 
            onClick={() => {  }}
            variant = "outlined"
        >
            Weiter
        </Button>    
        </div>
    </form>
    );
}