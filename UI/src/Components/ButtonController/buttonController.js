import React, { useContext } from "react";
import {ButtonContext} from "../Resume/ButtonContext";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn:{
      marginBottom:5,
      width:170
    }
  }));

export const ButtonController = () => {
    const [buttons,setButtons] = useContext(ButtonContext);
    const classes = useStyles();

    const handleClick = () => {
        setButtons(!buttons)
    }

    return (
      buttons?
      <Button className={classes.btn} variant="contained" color="primary" onClick={handleClick} type="button">Remove Buttons</Button>:<Button className={classes.btn} variant="contained" color="primary" onClick={handleClick} type="button"> Add Buttons </Button>
    );
}