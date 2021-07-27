import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();


    if (tasks.length === 0) {
        return null;
    } else
        return (
            <StyledButtons>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone === false ? "Ukryj ukończone" : "Pokaż ukończone"}
                </Button>

                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </StyledButtons >
        )
};

export default Buttons;