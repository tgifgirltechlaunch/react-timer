import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import StopIcon from '@material-ui/icons/Stop';

const styles = theme => ({
  button: {
    
    display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'start',
        margin: '0 auto',
        width: '100%',
        height: '65px'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const IconButton = (props) => {
    const { classes, onClick } = props;

  return (
    <div>
      <Button 
        variant="contained" 
        color="primary" 
        className={classes.button}
        onClick={onClick}
      >
        Stop
        <StopIcon className={classes.rightIcon}></StopIcon>
      </Button>
    </div>
  );
}

IconButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButton);