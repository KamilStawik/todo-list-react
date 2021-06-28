import React, { useState } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__input"
                autoFocus
                required
                placeholder="Co jest do zrobienia?" />
            <button className="form__button">Dodaj zadanie!</button>
        </form>

    );
};

export default Form;