import React from 'react'
import './ToDoComponent.css'
import ImageCompleted from '../assets/task-completed.png'
import ImageNotCompleted from '../assets/task-not-completed.png'

const ToDoComponent = () => {
    return (
        <>
            <div className='todo-container'>
                <div className='todo-box'>
                    <div className='todo-presentner'>
                        <div className='todo-header'>
                            <p className='todo-date'>
                                <span className='todo-date_current-date'>12</span>
                                <span className='todo-date_month-year'>
                                    <p className='todo-date_current-month'>JAN</p>
                                    <p className='todo-date_current-year'>2016</p>
                                </span>
                            </p>
                            <p className='todo-date'>
                                <span className='todo-date_current-day'>TUESDAY</span>
                            </p>
                        </div>
                        <div className='todo-main'>
                            <ul className='todo-lists'>
                                <li className='todo-list'>
                                    <p className='todo-list-completed'>Buy new sweatshirt</p>
                                    <div className='todo-list-progress'>
                                        <img src={ImageCompleted} />
                                    </div>
                                </li>
                                <li className='todo-list'>
                                    <p className='todo-list-completed'>Begin promotional phase</p>
                                    <div className='todo-list-progress'>
                                        <img src={ImageCompleted} />
                                    </div>
                                </li>
                                <li className='todo-list'>
                                    <p>Read an artice</p>
                                    <div className='todo-list-progress'>
                                        <img src={ImageNotCompleted} />
                                    </div>
                                </li>
                                <li className='todo-list'>
                                    <p>Try not to fall asleep</p>
                                    <div className='todo-list-progress'>
                                        <img src={ImageNotCompleted} />
                                    </div>
                                </li>
                                <li className='todo-list'>
                                    <p>Watch 'Sherloack'</p>
                                    <div className='todo-list-progress'>
                                        <img src={ImageNotCompleted} />
                                    </div>
                                </li>
                                <li className='todo-list'>
                                    <p>Begin QA for the product</p>
                                    <div className='todo-list-progress'>
                                        <img src={ImageNotCompleted} />
                                    </div>
                                </li>
                                <li className='todo-list'>
                                    <p>Go for a walk</p>
                                    <div className='todo-list-progress'>
                                        <img src={ImageNotCompleted} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='todo-footer'>
                            <div className='todo-add-box'>
                                <div className='todo-add-button'>
                                    <p className='todo-add-sign'>+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoComponent