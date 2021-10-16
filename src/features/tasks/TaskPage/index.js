import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Container } from "../../../common/Container";
import { DoneStatusBox } from "./styled";
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
                    <DoneStatusBox>
                        {task ? <strong>Ukończono: </strong> : ""}
                        {task ? `${task.done === true ? "Tak" : "Nie"}` : ""}
                    </DoneStatusBox>
                }
            />
        </Container>
    );
};

export default TaskPage;