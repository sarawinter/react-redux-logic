import { createLogic } from 'redux-logic';
import * as types from '../actions/actionTypes';

const validateBlueNumber = createLogic({
    type: [types.ADD, types.SUBTRACT],
    validate({ getState, action }, allow, reject) {
        const isNumber = !isNaN(action.payload);
        if (isNumber) {
            allow(action);
        } else {
            console.log('is not a number');
            reject({ type: types.NAN, payload: action.payload, error: true });
        }
    }
});

const addBlue = createLogic({
    type: types.ADD,
    transform({ getState, action }, next) {
        const currentSum = getState().blue.sum;
        const number = Number(action.payload);
        const newSum = currentSum + number;
        next({
            ...action,
            newSum: newSum
        });
    }
});

const subtractBlue = createLogic({
    type: types.SUBTRACT,
    transform({ getState, action }, next) {
        const currentSum = getState().blue.sum;
        const number = Number(action.payload);
        const newSum = currentSum - number;
        next({
            ...action,
            newSum: newSum
        });
    }
});


export default [
    validateBlueNumber,
    addBlue,
    subtractBlue
];