import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Toolbar, Button, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          ToyChat
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </div>
  );
}

export default ButtonAppBar;
