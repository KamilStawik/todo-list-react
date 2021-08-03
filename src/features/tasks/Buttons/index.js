import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, selectHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

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
};

export default Buttons;