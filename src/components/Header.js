/*
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { colors } from '../lib/styles';

const baseStyles = {
  header: {
    backgroundColor: colors.darkBackground
  },
  icon: {
    color: colors.white,
  }
};


class Header extends Component {

  render() {
    console.log('header props', this.props);
    return (
      <header style={baseStyles.header}>
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title"><Link to="/" className="mdl-navigation__link">BGG Picker</Link></span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link to="/hotness" className="mdl-navigation__link">Hotness</Link>
            <Link to="/settings" className="mdl-navigation__link">Settings</Link>
            <Link to="/webgames" className="mdl-navigation__link">Play</Link>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  const { router } = state;

  return {
    router
  };
}


export default connect(mapStateToProps)(Header);
*/

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            SoloMode
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
