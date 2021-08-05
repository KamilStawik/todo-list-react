import { takeEvery, call, put, delay, all } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks, setStateAsReady } from "./tasksSlice";

function* fetchExampleTasksHendler() {
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

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler);
}