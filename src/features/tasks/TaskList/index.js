import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { StyledTasks, ListItem, Content, Button } from "./styled";

const TaskList = ({ removeTask, toggleTaskDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);

    return (
        <StyledTasks>
            {tasks.map(task => (
                <ListItem key={task.id} hidden={task.done && hideDone}>
                    <Button onClick={() => toggleTaskDone(task.id)} toggleDone>
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content done={task.done && hideDone}>
                        {task.content}
                    </Content>
                    <Button onClick={() => removeTask(task.id)} remove>
                        🗑
                    </Button>
                </ListItem>
            ))}
        </StyledTasks>
    );
}

export default TaskList;