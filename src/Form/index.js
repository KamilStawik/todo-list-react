import React, { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const newTaskContentTrimed = newTaskContent.trim();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContentTrimed === "") {
            return
        };

        addNewTask(newTaskContentTrimed);
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
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