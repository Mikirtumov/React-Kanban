import React from 'react';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>Kanban</h1>
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
