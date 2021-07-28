import { useState, useEffect } from "react";

export const useTasks = () => {

    const tasksArray = localStorage.getItem("tasksArray");
    const [tasks, setTasks] = useState(
        tasksArray
            ? JSON.parse(tasksArray)
            : []
    );

    useEffect(() => {
        localStorage.setItem("tasksArray", JSON.stringify(tasks));
    }, [tasks]);

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task, done: true
        })));
    };

    return {
        setAllDone,
    };
};