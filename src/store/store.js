import { createStore } from 'redux';
import { taskReducer } from './taskReducer';

const initialState = [
    {
        id: 1,
        title: 'Task 1',
        complited: false,
    },
    {
        id: 2,
        title: 'Task 2',
        complited: false,
    },
];
export function initiateStore() {
    return createStore(taskReducer, initialState);
}
