import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
        marginBottom: 30
    },
};

const Header = props => (
    <div className={props.classes.root}>
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Tasks manager +
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);

export default withStyles(styles)(Header);