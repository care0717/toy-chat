import { makeStyles } from "@material-ui/core/styles";
import { Button, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

function SendButton() {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" className={classes.button}>
      <Icon>send</Icon>
    </Button>
  );
}

export default SendButton;
