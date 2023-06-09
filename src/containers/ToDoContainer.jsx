import React from "react";
import { useContext } from "react";
import ToDoComponent from "../components/ToDoComponent";
import useTime from "../hooks/useTime";
import { TodoContext } from "../store/TodoContext";

const ToDoContainer = () => {
    /* Define state and dispatch */
    const { state, dispatch } = useContext(TodoContext);
    const visibleTodos = state.todos;
    const dateData = useTime();

    return (
        <React.Fragment>
            <ToDoComponent
                visibleTodos={visibleTodos}
                dispatch={dispatch}
                dateData={dateData}
            />
        </React.Fragment>

    );
};

export default ToDoContainer;
