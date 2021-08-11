import { Container } from "../../../common/Container";
import Form from "./Form";
import Search from "./Search";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";

const TasksPage = () => {
    const exampleTasksButton = true;

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
                extraContent={<Buttons exampleTasksButton={exampleTasksButton} />}
            />
            <Section
                title="Wyszukiwarka"
                body={<Search />}
            />
            <Section
                title="Lista zadań"
                body={<TaskList />}
                extraContent={<Buttons />}
            />
        </Container>
    );
}

export default TasksPage;