import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    } else
        return (
            <StyledButtons>
                <Button
                    onClick={toggleHideDone}
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