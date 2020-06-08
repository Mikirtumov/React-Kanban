import React, {useState} from 'react';
import Column from "./Column";

// import './App.css';

const initialTodos = [
    {id: 1, name: "create 1", status: 'todo', pryoryty: 1},
    {id: 2, name: "create 2", status: 'progress', pryoryty: 2},
    {id: 3, name: "create 3", status: 'review', pryoryty: 3},
    {id: 4, name: "create 4", status: 'done', pryoryty: 4},
    {id: 5, name: "create 5", status: 'done', pryoryty: 5},

];


function App() {

    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
    const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState(initialTodos);

    const openCreateTaskForm = () => {
        setIsOpenCreateTaskForm(true);
    };
    const onTaskChange = (e) => {
        setIsActiveButtonTaskCreate(e.target.value.length > 4);
        setTaskInput(e.target.value);
    };
    const taskSubmit = (e) => {
        e.preventDefault();
        console.log(taskInput);
        taskReset();
        // setTaskInput('');
        // setIsOpenCreateTaskForm(false);
        // setIsActiveButtonTaskCreate(false);
    };
    const taskReset = () => {
        setTaskInput('');
        setIsOpenCreateTaskForm(false);
        setIsActiveButtonTaskCreate(false);
    };


    return (
        <div className="App">
            <div className="container">
                <h1>Kanban</h1>

                {!isOpenCreateTaskForm &&
                <button onClick={openCreateTaskForm} className="btn btn-primary">Create Task</button>}
                {isOpenCreateTaskForm &&
                <form>
                    <div className="form group">
                        <input type="text" className='form-control' onChange={onTaskChange}/>
                    </div>
                    <button onClick={taskSubmit} type="submit" className="btn btn-primary"
                            disabled={!isActiveButtonTaskCreate}>Submit
                    </button>
                    <button onClick={taskReset} className="btn btn-secondary">Cancel</button>
                </form>

                }

                <div className="row">

                    <div className="col-sm">
                        <div className="card">
                            <div className="card-header">
                                <Column tasks={tasks} status={'todo'}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-header">
                                <Column tasks={tasks} status={'progress'}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-header">
                                <Column tasks={tasks} status={'review'}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-header">
                                <Column tasks={tasks} status={'done'}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
