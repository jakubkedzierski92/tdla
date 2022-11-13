
import "./style.css";
import React, { useState } from "react";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form__block" onSubmit={onFormSubmit}>
        <div className="test2"> 
        <input 
        value={newTaskContent}
        placeholder="Co dziś zrobimy milordzie?" 
        autoFocus 
        className="form__input"
        onChange={(event) => setNewTaskContent(event.target.value) } /> 
        </div>
        <div className="test">
            <button className="button__transition form__button">dodaj zadanie
            </button>
            </div>
       </form>
    )
}
   


export default Form;