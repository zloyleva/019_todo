import React, { Component } from 'react';

import Header from "./Layouts/Header";
import TaskList from "./components/TaskList";
import {addNewTask} from "./store/actions";

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class App extends Component {
    render() {
        console.log(this.props);
        const {tasks, addNewTask, classes} = this.props;

        return (
            <div className={classes.root}>

                <Header/>

                <Grid container spacing={24}>
                    <form action="" onSubmit={(event)=>{
                        this.submitHandler(event, addNewTask)
                    }}>
                        <input type="text"/>
                        <button>Add task</button>
                    </form>

                    <TaskList tasks={tasks}/>
                </Grid>
            </div>
        );
    }

    submitHandler = (e,addNewTask) => {
        e.preventDefault();
        console.log("submitHandler",e.target[0].value);
        addNewTask(e.target[0].value);
        e.target.reset();
    }
}

const putStateToProps = (state) => {
    return {
        ...state
    }
};

const putActionsToComponent = (dispatch) => {
    return {
        addNewTask: bindActionCreators(addNewTask,dispatch)
    }
};

export default withStyles(styles)(connect(
    putStateToProps,
    putActionsToComponent
)(App));