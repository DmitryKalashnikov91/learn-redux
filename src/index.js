import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import {
    titleChanged,
    taskDeleted,
    completeTask,
    loadTasks,
    getTasks,
    getTasksLoadingStatus,
} from './store/task';
import configureStore from './store/store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getError } from './store/errors';
import { createTask } from './services/store/task';

const store = configureStore();
const App = () => {
    const state = useSelector(getTasks());
    const isLoading = useSelector(getTasksLoadingStatus());
    const error = useSelector(getError());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTasks());
    }, []);

    const addNewTask = () => {
        dispatch(createTask({ userId: 1, title: 'some new task', completed: false }));
    };

    const changeTitle = (taskId) => {
        dispatch(titleChanged(taskId));
    };
    const deleteTitle = (taskId) => {
        dispatch(taskDeleted(taskId));
    };
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    return (
        <>
            <h1>App</h1>

            <ul>
                {state.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p> {`Complited: ${el.completed}`}</p>
                        <button onClick={() => dispatch(completeTask(el.id))}>Complete</button>
                        <button onClick={() => changeTitle(el.id)}>Change title</button>
                        <button onClick={() => deleteTitle(el.id)}>Delete title</button>

                        <hr />
                    </li>
                ))}
            </ul>
            <button onClick={addNewTask()}>Add task</button>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
