import { StyledTasks, ListItem, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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

export default Tasks;