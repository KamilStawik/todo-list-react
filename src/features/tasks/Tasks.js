import React from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container";
import { useTasks } from "../../useTasks";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";

function Tasks() {

    const { tasks } = useSelector(selectTasks);

    const {
        // tasks,
        hideDone,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    } = useTasks();

    return (
        <Container>
            <Header title="Lista zadań" />

            <Section
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />}
            />

            <Section
                title="Lista zadań"
                body={<TaskList
                    tasks={tasks}
                    hideDone={hideDone}
                    removeTask={removeTask}
                    toggleTaskDone={toggleTaskDone}
                />}

                extraContent={<Buttons
                    tasks={tasks}
                    hideDone={hideDone}
                    toggleHideDone={toggleHideDone}
                    setAllDone={setAllDone}
                />}
            />
        </Container>
    );
};

export default Tasks;