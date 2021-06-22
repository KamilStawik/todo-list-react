import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    } else
        return (
            <div className="buttons__buttonsContainer">
                <button onClick={toggleHideDone} className="buttons">
                    {hideDone === false ? "Ukryj ukończone" : "Pokaż ukończone"}
                </button>
                <button
                    onClick={setAllDone}
                    className="buttons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </div >
        )
};

export default Buttons;
