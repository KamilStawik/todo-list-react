import { Container } from "../../common/Container";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";

const exampleTasksButton = true;

const Tasks = () => (
    <Container>
        <Header title="Lista zadań" />
        <Section
            title="Dodaj nowe zadanie"
            body={<Form />}
            extraContent={<Buttons exampleTasksButton={exampleTasksButton} />}
        />
        <Section
            title="Lista zadań"
            body={<TaskList />}
            extraContent={<Buttons />}
        />
    </Container>
);

export default Tasks;