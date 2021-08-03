import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasks } from "../tasksSlice";
import { StyledTasks, ListItem, Content, Button } from "./styled";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <StyledTasks>
            {tasks.map(task => (
                <ListItem key={task.id} hidden={task.done && hideDone}>
                    <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button onClick={() => dispatch(removeTask(task.id))} remove>
                        🗑
                    </Button>
                </ListItem>
            ))}
        </StyledTasks>
    );
};

export default TaskList;