import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { StyledTasks, ListItem, Content, Button, StyledLink } from "./styled";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
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
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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