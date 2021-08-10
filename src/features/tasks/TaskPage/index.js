import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Container } from "../../../common/Container";
import { BodyBox } from "./styled";
import Section from "../../../common/Section";
import Header from "../../../common/Header";

const TaskPage = () => {

    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Niestety nie znaleziono zadania 😢"}
                body={
                    <BodyBox>
                        <strong>Ukończono:</strong> {task.done === true ? "Tak" : "Nie"}
                    </BodyBox>
                }
            />
        </Container>
    );
}

export default TaskPage;