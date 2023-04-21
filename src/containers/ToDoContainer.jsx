import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ToDoComponent from '../components/ToDoComponent'
import { TodoContext } from '../store/TodoContext';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

const ToDoContainer = () => {
    const { state, dispatch } = useContext(TodoContext);
    const visibleTodos = state.todos;
    const [dateData, setDateData] = useState({})
    useEffect(() => {
        let interval = setInterval(setDateData({
            date: new Date().getDate(),
            day: weekNames[new Date().getDay()],
            month: monthNames[new Date().getMonth()],
            year: new Date().getFullYear(),
            sec: new Date().getSeconds()
        }), 1000)
        return () => clearInterval(interval)
    }, [])
    visibleTodos.sort((a, b) => b['completed'] - a['completed'])

    return (
        <ToDoComponent visibleTodos={visibleTodos} dispatch={dispatch} dateData={dateData} />
    )
}

export default ToDoContainer