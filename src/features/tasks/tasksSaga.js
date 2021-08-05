import { takeLatest, takeEvery, call, put, delay, all, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, setStateAsReady, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield all([
            put(setTasks(exampleTasks)),
            put(setStateAsReady()),
        ]);
    }
    catch (error) {
        yield call(alert, "Coś nie zadziałało");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}