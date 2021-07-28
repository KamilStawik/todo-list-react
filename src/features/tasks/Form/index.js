import React, { useState, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, Input, Button } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const newTaskContentTrimed = newTaskContent.trim();

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContentTrimed === "") {
            return
        };
        dispatch(addTask({
            content: newTaskContentTrimed,
            done: false,
            id: nanoid(),
        }));
        setNewTaskContent("");
        focusInput();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                ref={inputRef}
                onChange={({ target }) => setNewTaskContent(target.value)}
                autoFocus
                required
                placeholder="Co jest do zrobienia?"
            />
            <Button>Dodaj zadanie!</Button>
        </StyledForm>
    );
};

export default Form;