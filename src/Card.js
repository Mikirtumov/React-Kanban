import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

const left = (<svg className="bi bi-box-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M4.354 11.354a.5.5 0 0 0 0-.708L1.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
    <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5z"/>
    <path fillRule="evenodd"
          d="M14 13.5a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 14 2.5H7A1.5 1.5 0 0 0 5.5 4v1.5a.5.5 0 0 0 1 0V4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 0-1 0V12A1.5 1.5 0 0 0 7 13.5h7z"/>
</svg>)
const right = <svg className="bi bi-box-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M11.646 11.354a.5.5 0 0 1 0-.708L14.293 8l-2.647-2.646a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
    <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
    <path fillRule="evenodd"
          d="M2 13.5A1.5 1.5 0 0 1 .5 12V4A1.5 1.5 0 0 1 2 2.5h7A1.5 1.5 0 0 1 10.5 4v1.5a.5.5 0 0 1-1 0V4a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 1 0V12A1.5 1.5 0 0 1 9 13.5H2z"/>
</svg>

const  plus = <svg className="bi bi-plus-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>

const minus = <svg className="bi bi-dash-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path fillRule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"/>
</svg>

const trash = <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>

function Card(props) {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }



    const priority = props.task.priority;

    const handleRight = () => props.changeStatus({id: props.task.id, direction: 'right'})
    const handleLeft = () => props.changeStatus({id: props.task.id, direction: 'left'})

    const handleUp = () => {
        props.changePriority({id: props.task.id, direction: 'up'})
    }

    const handleDown = () => {
            props.changePriority({id: props.task.id, direction: 'down'})
    }
    const handleDelete = () => {
        props.deleteTask(props.task)
        handleClose();

    }

    return (


            <div className="card m-2">
                <div className="card-body">
                    {
                        priority < 3 && <div onClick={handleUp}>{minus}</div>
                    }
                    {
                        priority > 1 && <div onClick={handleDown}>{plus}</div>
                    }
                    {
                        priority === 1 &&
                            <span className="badge badge-danger">
                                {props.priorities.find(el => el.id === priority).priority}
                            </span>
                    }
                    {
                        priority === 2 &&
                        <span className="badge badge-warning">
                                {props.priorities.find(el => el.id === priority).priority}
                            </span>
                    }
                    {
                        priority === 3 &&
                        <span className="badge badge-success">
                                {props.priorities.find(el => el.id === priority).priority}
                            </span>
                    }


                    <p className="card-text">{props.task.name}</p>
                    {
                        props.task.status !== 'todo' && <span className= 'mr-2' onClick={handleLeft}>{left}</span>
                    }
                    {
                        props.task.status !== 'done' && <span onClick={handleRight}>{right}</span>
                    }


                        <span className='m-auto' onClick={handleShow}>
                            {trash}
                        </span>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete Task</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure you want to delete task?</Modal.Body>
                            <Modal.Footer>
                                <Button className="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button className="primary" onClick={handleDelete}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>



                </div>
            </div>

    );
}

export default Card;
