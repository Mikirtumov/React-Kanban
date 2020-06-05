import React, {useState} from 'react';

// import './App.css';

function App() {

    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
    const [isActiveButtonTaskCreate, setisActiveButtonTaskCreate] = useState(false);

    const openCreateTaskForm = () => {
        setIsOpenCreateTaskForm(true);
    };
    const onTaskChange = (e) => {
        setisActiveButtonTaskCreate(e.target.value.length > 4);
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
                    <button type="submit" className="btn btn-primary" disabled={!isActiveButtonTaskCreate}>Submit
                    </button>
                </form>

                }

                <div className="row">

                    <div className="col-sm">
                        To do
                    </div>
                    <div className="col-sm">
                        In progress
                    </div>
                    <div className="col-sm">
                        Review
                    </div>
                    <div className="col-sm">
                        Done
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
