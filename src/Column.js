import React from 'react';

// import './App.css';

function Column(props) {


    return (
        <div className="App">
            {props.tasks.filter(el => el.status === props.status).map(el => el.name)}
        </div>
    );
}

export default Column;
