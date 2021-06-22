import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => {
    if (tasks.length === 0) {
        return null;
    } else
        return (
            <div className="buttons__buttonsContainer">
                <button onClick={toggleHideDone} className="buttons">
                    {hideDone === false ? "Ukryj ukończone" : "Pokaż ukończone"}
                </button>
                <button
                    className="buttons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </div >
        )
};

export default Buttons;
