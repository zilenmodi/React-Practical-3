import React from "react";
import "./ToDoFormComponent.css";

const ToDoFormComponent = ({
    todo,
    changeInput,
    handleEnter,
    isPlusBtnOn,
    togglePlusBtn,
}) => {
    return (
        <>
            {/* Either + button or text fields */}
            {isPlusBtnOn ? (
                <div className="todo-add-button" onClick={togglePlusBtn}>
                    <p className="todo-add-sign">+</p>
                </div>
            ) : (
                <form>
                    <input
                        type="text"
                        value={todo.text}
                        onChange={changeInput}
                        className="todo-list-text"
                        placeholder="Enter To-Do Task"
                        autoFocus
                        maxLength={30}
                    />
                    <p>For Delete all todos, Write "DELETE"</p>
                    <button onClick={(e) => handleEnter(e)} hidden>
                        Submit
                    </button>
                </form>
            )}
        </>
    );
};

export default ToDoFormComponent;
