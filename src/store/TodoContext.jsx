import React, { createContext, useReducer } from 'react';
import useTime from '../hooks/useTime';

const initialState = {
    todos: checkSessionExpirey(JSON.parse(localStorage.getItem('todoLists'))) || []
};

export const TodoContext = createContext();

function checkSessionExpirey(todoLists) {
    let updatedTodoLists = todoLists.filter((todo) => (new Date()).getDate() === todo.createdAt);
    localStorage.setItem('todoLists', JSON.stringify(updatedTodoLists));
    return updatedTodoLists;
}

export const todoReducer = (state, action) => {
    let newTodoLists;
    switch (action.type) {
        case 'ADD_TODO':
            action.payload.id = Math.ceil(Math.random() * 10000);
            action.payload.createdAt = new Date().getDate()
            newTodoLists = [...state.todos, action.payload]
            return { ...state, todos: checkSessionExpirey(newTodoLists) };
        case 'DELETE_TODO':
            newTodoLists = []
            return { ...state, todos: checkSessionExpirey(newTodoLists) };
        case 'TOGGLE_TODO':
            newTodoLists = state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            return {
                ...state,
                todos: checkSessionExpirey(newTodoLists)
            };
        default:
            return state;
    }
};

export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    );
};
