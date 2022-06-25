import { taskDeleted } from './actionTypes';
import { taskUpdated } from './actionTypes';

export function taskReducer(state = [], action) {
    switch (action.type) {
        case taskUpdated: {
            const newArray = [...state];
            const elementIndex = newArray.findIndex((el) => el.id === action.payload.id);
            newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
            return newArray;
        }
        case taskDeleted: {
            const newArray = [...state];
            const taskId = action.payload.id;
            console.log(taskId);
            let remooveTask = newArray.filter((task) => task.id !== taskId);
            return remooveTask;
        }

        default:
            return state;
    }
}
