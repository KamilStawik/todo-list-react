import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header"
import Container from "./Container";

const tasks = [
    { id: 1, content: "Zajeść śniadanie", done: false },
    { id: 5, content: "posprzątać biurko", done: true },
    { id: 7, content: "zrobić zakupy", done: false },
]

function App() {
    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    return (

        <Container>

            <Header title="Lista zadań" />

            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />

            <Section
                title="Lista zadań"
                body={<Tasks tasks={tasks} hideDone={hideDone} />}
                extraContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
            />

        </Container>


    );
}

export default App;
