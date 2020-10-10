import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 1,
    label: 'Verbesserungswürdig',
  },
  {
    value: 2,
    label: 'Zufrieden',
  },
  {
    value: 3,
    label: 'Sehr gut',
  },
];

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Lernerfolg
      </Typography>
      <Slider
        defaultValue={2}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
        marks = {marks}
        min={1}
        max={3}
      />
    </div>
  );
}