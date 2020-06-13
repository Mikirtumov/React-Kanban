import React, {useState} from 'react';
import Column from "./Column";
import {v4 as uuidv4} from 'uuid';


const initialTodos = [
    {id: uuidv4(), name: "create 1 ", status: 'todo', priority: 1},
    {id: uuidv4(), name: "create 2 ", status: 'progress', priority: 2},
    {id: uuidv4(), name: "create 3 ", status: 'review', priority: 3},
    {id: uuidv4(), name: "create 4 ", status: 'done', priority: 2},
    {id: uuidv4(), name: "create 5 ", status: 'done', priority: 1},
    {id: uuidv4(), name: "create 6 ", status: 'done', priority: 3},
    {id: uuidv4(), name: "create 7 ", status: 'done', priority: 3},
    {id: uuidv4(), name: "create 8 ", status: 'todo', priority: 2},
    {id: uuidv4(), name: "create 9 ", status: 'todo', priority: 1},

];

    const statuses = ['todo', 'progress', 'review', 'done'];

const priorities = [
    {id: 1, priority: 'High'},
    {id: 2, priority: 'Medium'},
    {id: 3, priority: 'Low'}
]

function App() {

    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
    const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState(initialTodos);
    const [status, setStatus] = useState('');

    const openCreateTaskForm = () => {
        setIsOpenCreateTaskForm(true);
    };
    const onTaskChange = (e) => {
        setIsActiveButtonTaskCreate(e.target.value.length > 4);
        setTaskInput(e.target.value);
    };
    const taskSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, {id: uuidv4(), name: taskInput, status: status, priority: 1}])
        taskReset();

    };
    const taskReset = () => {
        setTaskInput('');
        setIsOpenCreateTaskForm(false);
        setIsActiveButtonTaskCreate(false);
    };

    const changeStatus = ({id, direction}) => {
        console.log(id, direction)

        const updatedTasks = tasks.map(el => {
            if (el.id === id) {
                if (direction === 'left') {
                    el.status = statuses[statuses.indexOf(el.status) - 1];
                }
                if (direction === 'right') {
                    el.status = statuses[statuses.indexOf(el.status) + 1];
                }
                return el;
            } else return el;

        });
        setTasks(updatedTasks);
    }

    const changePriority = ({id, direction}) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                if(direction === 'up'){
                  return   {...task, priority: ++task.priority}
                }
                if(direction === 'down'){
                    return   {...task, priority: --task.priority}
                }
            }return task

        })
        setTasks(updatedTasks);
    }
    const deleteTask = (task) => {
        const updatedTasks = tasks.filter(obj => obj.id !== task.id);
        setTasks(updatedTasks);
    }


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

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Statuses:</label>
                        </div>
                        <select onChange={(e) => setStatus(e.target.value)} defaultValue="done" className="custom-select" id="inputGroupSelect01">
                            {
                                statuses.sort((a, b) => b - a)
                                    .map(el =>
                                    <option key={el} value={el}>{el}</option>
                                )
                            }

                        </select>
                    </div>

                    <button onClick={taskSubmit} type="submit" className="btn btn-primary"
                            disabled={!isActiveButtonTaskCreate}>Submit
                    </button>
                    <button onClick={taskReset} className="btn btn-secondary">Cancel</button>
                </form>

                }

                <div className="row">

                    <div className='col-sm'>

                        <Column tasks={tasks} status={'todo'} changeStatus={changeStatus} changePriority={changePriority} priorities={priorities} deleteTask={deleteTask}/>
                    </div>
                    <div className='col-sm'>
                        <Column tasks={tasks} status={'progress'} changeStatus={changeStatus} changePriority={changePriority} priorities={priorities} deleteTask={deleteTask}/>
                    </div>
                    <div className='col-sm'>
                        <Column tasks={tasks} status={'review'} changeStatus={changeStatus} changePriority={changePriority} priorities={priorities} deleteTask={deleteTask}/>
                    </div>
                    <div className='col-sm'>
                        <Column tasks={tasks} status={'done'} changeStatus={changeStatus} changePriority={changePriority} priorities={priorities} deleteTask={deleteTask}/>
                    </div>


                    

                </div>
            </div>
        </div>
    );
}

export default App;
