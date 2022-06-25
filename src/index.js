import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import * as actions from './store/actions';
import { initiateStore } from './store/store';

const store = initiateStore();
const App = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState());
        });
    }, []);

    const completeTask = (taskId) => {
        store.dispatch(actions.taskCompleted(taskId));
    };
    const changeTitle = (taskId) => {
        store.dispatch(actions.titleChanged(taskId));
    };
    const deleteTitle = (taskId) => {
        store.dispatch(actions.taskDeleted(taskId));
        console.log(taskId);
    };
    return (
        <>
            <h1>App</h1>

            <ul>
                {state.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p> {`Complited: ${el.complited}`}</p>
                        <button onClick={() => completeTask(el.id)}>Complete</button>
                        <button onClick={() => changeTitle(el.id)}>Change title</button>
                        <button onClick={() => deleteTitle(el.id)}>Delete title</button>

                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
