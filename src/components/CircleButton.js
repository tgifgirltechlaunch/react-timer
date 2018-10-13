import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { IoIosPlay, IoIosPause} from 'react-icons/io';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const CircleButton = (props) => {
  const { classes, onClick, label, icon } = props;

  // console.log("props >>>> " + JSON.stringify({icon}));
  return (
    <div>
      <Button 
        variant="fab" 
        color={"secondary"}
        aria-label={label}
        className={classes.button}
        onClick={onClick}  
      >

      {JSON.stringify({icon}) === '{"icon":"Play"}' ? <IoIosPlay /> : <IoIosPause />}

      </Button>
    </div>
  );
}

CircleButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircleButton);