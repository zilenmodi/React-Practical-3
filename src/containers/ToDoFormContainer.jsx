import React, { useState, useContext } from "react";
import { useEffect } from "react";
import ToDoFormComponent from "../components/ToDoFormComponent";
import { TodoContext } from "../store/TodoContext";
import swal from "sweetalert2";

/* This component is responsible for handling the form for adding new todos */
const ToDoFormContainer = () => {
    const { state, dispatch } = useContext(TodoContext);
    const [isPlusBtnOn, setIsPlusBtnOn] = useState(true);
    const [isError, setIsError] = useState(false);
    const [todo, setTodo] = useState({
        id: "",
        text: "",
        completed: false,
        createdAt: ""
    }); //useState hook is used to manage the state of the todo object

    /* This function handles the form submission when the user hits the Enter key */
    const handleEnter = (e) => {
        e.preventDefault();
        /* Checks if the todo text is not empty or exceeds the limit of 30 characters */
        if (todo.text.replace(/^\s+|\s+$/gm, '').length == 0 || todo.text > 30) {
            setIsError(true);
            setTimeout(() => setIsError(false), 2000);
            return;
        } /* If the todo text is "DELETE", it asks for confirmation before deleting all the todos */
        if (todo.text === "DELETE") {
            if (confirm("Are you sure?")) {
                setIsPlusBtnOn(true);
                dispatch({ type: "DELETE_TODO" });
                sweetAlert("error", "Deleted successfully");
            }
        } /* dispatches the ADD_TODO action with the todo object as the payload */
        else {
            dispatch({ type: "ADD_TODO", payload: todo });
            sweetAlert("success", "Added successfully");
        }
        setTodo({
            id: "",
            text: "",
            completed: false,
            createdAt: ""
        });
        setIsError(false);
    }

    const changeInput = (e) => {
        setTodo((prev) => ({ ...prev, text: e.target.value }));
    }

    const togglePlusBtn = () => {
        setIsPlusBtnOn((prev) => !prev);
    }

    const sweetAlert = (icon, message) => {
        window.Swal = swal;
        Swal.fire({
            toast: true,
            icon: icon,
            title: message,
            animation: false,
            position: "bottom-left",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                // add event listeners to pause/resume timer on hover
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
    }

    /* This useEffect hook is used to add the event listener for the Escape key press */
    useEffect(() => {
        const keyDownHandler = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                setIsPlusBtnOn(true);
            }
        };
        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);

    return (
        <React.Fragment>
            <ToDoFormComponent
                todo={todo}
                changeInput={changeInput}
                handleEnter={handleEnter}
                isPlusBtnOn={isPlusBtnOn}
                togglePlusBtn={togglePlusBtn}
                isError={isError}
            />
        </React.Fragment>
    );
};

export default ToDoFormContainer;
