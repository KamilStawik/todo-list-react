import "./style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    } else
        return (
            <div className="buttons__buttonsContainer">
                <button className="buttons">
                    {props.hideDone === false ? "Ukryj ukończone" : "Pokaż ukończone"}
                </button>
                <button
                    className="buttons"
                    disabled={props.tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </div >
        )
};

export default Buttons;
