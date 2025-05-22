import React from 'react';


const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date)
}

export default function ToDoList() {
    return (
        <div>
            <h1>To DO List {formatDate(today)}</h1>
        </div>
    )
}