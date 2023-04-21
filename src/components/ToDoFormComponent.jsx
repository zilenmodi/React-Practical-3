import React from 'react'

const ToDoFormComponent = ({ todo, changeInput, handleEnter }) => {
    return (
        <>
            <form>
                <input
                    type="text"
                    value={todo.text}
                    onChange={changeInput}
                />
                <button onClick={(e) => handleEnter(e)} hidden>Submit</button>
            </form>

        </>
    )
}

export default ToDoFormComponent