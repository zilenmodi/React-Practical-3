import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import ToDoFormComponent from '../components/ToDoFormComponent';
import { TodoContext } from '../store/TodoContext';

const ToDoFormContainer = () => {
    const { state, dispatch } = useContext(TodoContext);
    const [isSubmit, setIsSubmit] = useState(false);
    const [todo, setTodo] = useState({
        id: "",
        text: "",
        completed: false,
    })

    useEffect(() => {
        setIsSubmit(false);
    }, [todo])

    useEffect(() => {
        setTodo((prev) => ({ ...prev, id: Math.ceil(Math.random() * 10000) }));
    }, [isSubmit])

    function handleEnter(e) {
        e.preventDefault();

        dispatch({ type: 'ADD_TODO', payload: todo })

        setIsSubmit(true);

        setTodo({
            id: "",
            text: "",
            completed: false,
        })
    }

    function changeInput(e) {
        setTodo((prev) => ({ ...prev, text: e.target.value }))
    }

    return (
        <>
            <ToDoFormComponent todo={todo} changeInput={changeInput} handleEnter={handleEnter} />
        </>
    )
}

export default ToDoFormContainer