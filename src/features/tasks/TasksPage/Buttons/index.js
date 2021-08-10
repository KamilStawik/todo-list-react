import { useSelector, useDispatch } from "react-redux";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    selectHideDone,
    fetchExampleTasks,
    setStateAsLoading,
    selectStatus,
} from "../../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = ({ exampleTasksButton }) => {
    const tasks = useSelector(selectTasks);
    const status = useSelector(selectStatus);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    if (exampleTasksButton === true) {
        return (
            <StyledButtons>
                <Button
                    disabled={status === "loading" ? true : false}
                    onClick={() => {
                        dispatch(fetchExampleTasks())
                        dispatch(setStateAsLoading())
                    }}
                >
                    {status === "ready" ? "Pobierz przykładowe zadania" : "Ładowanie"}
                </Button>
            </StyledButtons >
        );

    } else {
        return tasks.length > 0 && (
            <StyledButtons>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone === false ? "Ukryj ukończone" : "Pokaż ukończone"}
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </StyledButtons >
        );
    }
};

export default Buttons;