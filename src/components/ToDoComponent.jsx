import React from "react";
import "./ToDoComponent.css";
import ImageCompleted from "../assets/task-completed.png";
import ImageNotCompleted from "../assets/task-not-completed.png";
import ToDoFormContainer from "../containers/ToDoFormContainer";
import ImageAllComplete from "../assets/complete.png";

const ToDoComponent = ({ visibleTodos, dispatch, dateData }) => {
    visibleTodos.sort((a, b) => b["completed"] - a["completed"]);
    return (
        <>
            <div className="todo-container">
                <div className="todo-box">
                    <div className="todo-presentner">
                        <div className="todo-header">
                            <div className="todo-date">
                                <span className="todo-date_current-date">{dateData.date}</span>
                                <span className="todo-date_month-year">
                                    <p className="todo-date_current-month">{dateData.month?.slice(0, 3).toUpperCase()}</p>
                                    <p className="todo-date_current-year">{dateData.year}</p>
                                </span>
                            </div>
                            <p className="todo-date">
                                <span className="todo-date_current-day">{dateData.day?.toUpperCase()}</span>
                            </p>
                        </div>
                        <div className="todo-main">
                            <ul className="todo-lists">
                                {
                                    visibleTodos.length ? <>
                                        {visibleTodos?.map((todo) => (
                                            <li key={todo.id} className="todo-list">
                                                <p className={todo.completed ? "todo-list-completed" : ""}>
                                                    {todo.text}
                                                </p>
                                                <div
                                                    className="todo-list-progress"
                                                    onClick={() =>
                                                        dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            todo.completed ? ImageCompleted : ImageNotCompleted
                                                        }
                                                    />
                                                </div>
                                            </li>
                                        ))}</> : <>
                                        <div className="todo-zero-box">
                                            <h3>Nothing remain!!!</h3>
                                            <div className="todo-all-complete-img">
                                                <img src={ImageAllComplete} />
                                            </div>
                                        </div>
                                    </>
                                }
                            </ul>
                        </div>
                        <div className="todo-footer">
                            <div className="todo-add-box">
                                <ToDoFormContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoComponent;
