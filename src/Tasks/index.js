import "./style.css";


const Tasks = (props) => (
    <ul className="taskList">
        {props.tasks.map(task => (
            <li key={task.id} className={`taskList__listItem${task.done && props.hideDone ? " taskList__listItem--hiden" : ""}`}>
                <button className="taskList__button">{task.done ? "✓" : ""}</button>
                <span className={`taskList__taskContent${task.done ? " taskList__taskContent--done" : ""}`}>{task.content}</span>
                <button className="taskList__button taskList__button--removeButton">🗑</button>
            </li>
        ))}
    </ul >
);

export default Tasks;
