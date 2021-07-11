import { useState, useEffect } from "react";

export const useTasks = () => {

    const tasksArray = localStorage.getItem("tasksArray");
    const [hideDone, setHideDone] = useState(false);
    const [tasks, setTasks] = useState(
        tasksArray
            ? JSON.parse(tasksArray)
            : []
    );

    useEffect(() => {
        localStorage.setItem("tasksArray", JSON.stringify(tasks));
    }, [tasks]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            } else {
                return task;
            }
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task, done: true
        })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            }
        ]);
    };

    return {
        tasks,
        hideDone,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    };
};