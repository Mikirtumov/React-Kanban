import React from 'react';
import Card from "./Card";

// import './App.css';

function Column(props) {


    return (
        <div className="App">
            {props.tasks
                .filter(el => el.status === props.status)
                .sort((a, b) => a.priority - b.priority)
                .map(el => <Card  key={el.id} task={el} changeStatus={props.changeStatus} changePriority={props.changePriority} priorities={props.priorities} deleteTask={props.deleteTask}/>)}
        </div>
    );
}

export default Column;
