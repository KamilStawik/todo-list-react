import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const newTaskContentTrimed = newTaskContent.trim();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContentTrimed === "") {
            return
        };

        addNewTask(newTaskContentTrimed);
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