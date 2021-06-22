import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li key={task.id} className={`taskList__listItem${task.done && hideDone ? " taskList__listItem--hiden" : ""}`}>
                <button onClick={() => toggleTaskDone(task.id)} className="taskList__button">{task.done ? "✓" : ""}</button>
                <span className={`taskList__taskContent${task.done ? " taskList__taskContent--done" : ""}`}>{task.content}</span>
                <button onClick={() => removeTask(task.id)} className="taskList__button taskList__button--removeButton">🗑</button>
            </li>
        ))}
    </ul >
);

export default Tasks;