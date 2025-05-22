import React from 'react'
import ToDoList from './ToDoList';
import Avatar from './Avatar';
import Gallery from './Gallery';
import NewProfile from './Thumbnail';
import PackingList from './PackingList';

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
            <Avatar />
            <Gallery />
            <NewProfile />
            <PackingList />
        </div >

    )
}

export default App;