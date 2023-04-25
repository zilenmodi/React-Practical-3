import React from "react";
import "./ToDoFormComponent.css";

const ToDoFormComponent = ({
    todo,
    changeInput,
    handleEnter,
    isPlusBtnOn,
    togglePlusBtn,
    isError
}) => {
    return (
        <React.Fragment>
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
                    {
                        isError ? <p className="error-msg">Please Enter Valid Tasks</p> : <p>For Delete all todos, Write "DELETE"</p>
                    }
                    <button onClick={(e) => handleEnter(e)} hidden>
                        Submit
                    </button>
                </form>
            )}
        </React.Fragment>
    );
};

export default ToDoFormComponent;
