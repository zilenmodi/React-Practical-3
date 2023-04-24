import React, { useState, useContext } from "react";
import { useEffect } from "react";
import ToDoFormComponent from "../components/ToDoFormComponent";
import { TodoContext } from "../store/TodoContext";
import swal from "sweetalert2";

const ToDoFormContainer = () => {
    const { state, dispatch } = useContext(TodoContext);
    const [isPlusBtnOn, setIsPlusBtnOn] = useState(true);
    const [todo, setTodo] = useState({
        id: "",
        text: "",
        completed: false,
        createdAt: ""
    });

    function handleEnter(e) {
        e.preventDefault();
        if (todo.text.replace(/^\s+|\s+$/gm, '').length == 0 || todo.text > 30) {
            alert("fill correctly");
            return;
        }
        if (todo.text === "DELETE") {
            if (confirm("Are you sure?")) {
                setIsPlusBtnOn(true);
                dispatch({ type: "DELETE_TODO" });
                sweetAlert("error", "Deleted successfully");
            }
        }
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
    }

    function changeInput(e) {
        setTodo((prev) => ({ ...prev, text: e.target.value }));
    }

    function togglePlusBtn() {
        setIsPlusBtnOn((prev) => !prev);
    }

    function sweetAlert(icon, message) {
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
        <>
            <ToDoFormComponent
                todo={todo}
                changeInput={changeInput}
                handleEnter={handleEnter}
                isPlusBtnOn={isPlusBtnOn}
                togglePlusBtn={togglePlusBtn}
            />
        </>
    );
};

export default ToDoFormContainer;
