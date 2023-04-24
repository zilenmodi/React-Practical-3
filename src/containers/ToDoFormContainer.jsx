import React, { useState, useContext } from "react";
import { useEffect } from "react";
import ToDoFormComponent from "../components/ToDoFormComponent";
import { TodoContext } from "../store/TodoContext";
import swal from "sweetalert2";

const ToDoFormContainer = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isPlusBtnOn, setIsPlusBtnOn] = useState(true);
  const [todo, setTodo] = useState({
    id: "",
    text: "",
    completed: false,
  });

  useEffect(() => {
    setIsSubmit(false);
  }, [todo]);

  useEffect(() => {
    setTodo((prev) => ({ ...prev, id: Math.ceil(Math.random() * 10000) }));
  }, [isSubmit]);

  function handleEnter(e) {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setIsSubmit(true);
    setTodo({
      id: "",
      text: "",
      completed: false,
    });
    success();
  }

  function changeInput(e) {
    setTodo((prev) => ({ ...prev, text: e.target.value }));
  }

  function togglePlusBtn() {
    setIsPlusBtnOn((prev) => !prev);
  }

  function success() {
    // function to display a success message
    window.Swal = swal;
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Added successfully",
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
