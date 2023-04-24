import React from "react";
import { useContext } from "react";
import ToDoComponent from "../components/ToDoComponent";
import useTime from "../hooks/useTime";
import { TodoContext } from "../store/TodoContext";

const ToDoContainer = () => {
    const { state, dispatch } = useContext(TodoContext);
    const visibleTodos = state.todos;
    const dateData = useTime();

    return (
        <ToDoComponent
            visibleTodos={visibleTodos}
            dispatch={dispatch}
            dateData={dateData}
        />
    );
};

export default ToDoContainer;
