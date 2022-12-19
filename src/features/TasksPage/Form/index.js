import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import  { addTask }  from "../../tasksSlice";
import { HiddenDiv1, HiddenDiv2, FormButton, StyledForm } from "./styled";
import Input from "../Input";

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
        <HiddenDiv2> 
        <Input 
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co dziś zrobimy milordzie?" 
        autoFocus 
        required
        onChange={(event) => setNewTaskContent(event.target.value) } /> 
        </HiddenDiv2>
        <HiddenDiv1>
            <FormButton>
                dodaj zadanie
            </FormButton>
            </HiddenDiv1>
       </StyledForm>
    )
}
   


export default Form;