import React from 'react';
import {bindActionCreators} from "redux";
import {doneTask} from "../../store/actions";
import {connect} from "react-redux";

const TaskList = (props) => {

    const {tasks} = props;
    console.log(props);

    return (
        <ul>
            {tasks.map((el, index) => (
                <li key={index}>
                    {el.name}
                    {
                        el.done?"":<button onClick={onDoneHandler}>Done</button>
                    }
                    <button onClick={onRemoveHandler}>Remove</button>
                </li>
            ))}
        </ul>
    )
};

const onDoneHandler = () => {
    console.log("onDoneHandler")
};

const onRemoveHandler = () => {
    console.log("onRemoveHandler")
};

const mapStateToPorps = state => ({...state});
const mapActionsToProps = dispatch =>{
    return {
        setTaskDone: task => dispatch(doneTask(task))
    }
};

export default connect(mapStateToPorps,mapActionsToProps)(TaskList);