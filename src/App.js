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

const hideDoneTasks = false;

function App() {
    return (

        <Container>

            <Header title="Lista zadań" />

            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />

            <Section
                title="Lista zadań"
                body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                extraContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
            />

        </Container>


    );
}

export default App;
