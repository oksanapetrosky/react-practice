import React from 'react'
import ToDoList from './ToDoList';

function App() {
    return (
        <div>
            <div className="intro">
                <h1>Welcome to my Website!</h1>
            </div>
            <p className="summary">
                You can find my thoughts here.
                <br /><br />
                    <b>And <i>pictures</i></b> of scientists!
            </p>

            <ToDoList />
        </div >

    )
}

export default App;