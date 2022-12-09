import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import  { addTask }  from "../tasksSlice";
import { DivButton1, DivButton2, FormButton, Input, StyledForm } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("")
    const inputRef = useRef(null);
    
   const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }
        ))
        setNewTaskContent("");
       inputRef.current.focus();
    };

    

    return (
        <StyledForm onSubmit={onFormSubmit}>
        <DivButton2> 
        <Input 
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co dziś zrobimy milordzie?" 
        autoFocus 
        required
        onChange={(event) => setNewTaskContent(event.target.value) } /> 
        </DivButton2>
        <DivButton1>
            <FormButton>
                dodaj zadanie
            </FormButton>
            </DivButton1>
       </StyledForm>
    )
}
   


export default Form;