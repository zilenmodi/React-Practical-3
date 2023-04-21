import React from 'react'
import './ToDoComponent.css'
import ImageCompleted from '../assets/task-completed.png'
import ImageNotCompleted from '../assets/task-not-completed.png'
import ToDoFormContainer from '../containers/ToDoFormContainer'
import { useState } from 'react'



const ToDoComponent = ({ visibleTodos, dispatch, dateData }) => {


    return (
        <>
            <div className='todo-container'>
                <div className='todo-box'>
                    <div className='todo-presentner'>
                        <h1>{dateData.sec}</h1>
                        <div className='todo-header'>
                            <p className='todo-date'>
                                <span className='todo-date_current-date'>{dateData.date}</span>
                                <span className='todo-date_month-year'>
                                    <p className='todo-date_current-month'>{dateData.month}</p>
                                    <p className='todo-date_current-year'>{dateData.year}</p>
                                </span>
                            </p>
                            <p className='todo-date'>
                                <span className='todo-date_current-day'>{dateData.day}</span>
                            </p>
                        </div>
                        <div className='todo-main'>
                            <ul className='todo-lists'>
                                {visibleTodos?.map((todo) => (
                                    <li key={todo.id} className='todo-list'>
                                        <p className={todo.completed ? 'todo-list-completed' : ''}>{todo.text}</p>
                                        <div className='todo-list-progress' onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
                                            <img src={todo.completed ? ImageCompleted : ImageNotCompleted} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='todo-footer'>
                            <div className='todo-add-box'>
                                {/* <div className='todo-add-button'>
                                    <p className='todo-add-sign'>+</p>
                                </div> */}
                                <ToDoFormContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoComponent