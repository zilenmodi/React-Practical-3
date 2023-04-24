import React, { createContext, useReducer } from 'react';

/* Define the initial state for the todo list */
const initialState = {
    todos: checkSessionExpirey(JSON.parse(localStorage.getItem('todoLists')) || [])
};

/* Create a new context for the todo list */
export const TodoContext = createContext();

/* Helper function to remove expired to-do list items from local storage */
function checkSessionExpirey(todoLists) {
    let updatedTodoLists = todoLists.filter((todo) => (new Date()).getDate() === todo.createdAt);
    localStorage.setItem('todoLists', JSON.stringify(updatedTodoLists));
    return updatedTodoLists;
}

/* Define the reducer function for the todo list */
export const todoReducer = (state, action) => {
    let newTodoLists;
    switch (action.type) {
        case 'ADD_TODO':
            /* Generate a new unique ID for the to-do list item */
            action.payload.id = Math.ceil(Math.random() * 10000);
            /* Set the creation date for the to-do list item */
            action.payload.createdAt = new Date().getDate()
            /* Add the new to-do list item to the list */
            newTodoLists = [...state.todos, action.payload]
            /* Remove expired to-do list items and update the local storage */
            return { ...state, todos: checkSessionExpirey(newTodoLists) };
        case 'DELETE_TODO':
            /* Delete all to-do list items */
            newTodoLists = []
            /* Remove expired to-do list items and update the local storage */
            return { ...state, todos: checkSessionExpirey(newTodoLists) };
        case 'TOGGLE_TODO':
            /* Toggle the completed status of the specified to-do list item */
            newTodoLists = state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            /* Remove expired to-do list items and update the local storage */
            return {
                ...state,
                todos: checkSessionExpirey(newTodoLists)
            };
        default:
            /* Return the current state if the action is not recognized */
            return state;
    }
};

/* Create a new provider component for the todo list */
export const TodoProvider = (props) => {
    /* Use the todoReducer and initialState to create a new state and dispatch object */
    const [state, dispatch] = useReducer(todoReducer, initialState);

    /* Render the TodoContext provider with the state and dispatch objects as values */
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    );
};
