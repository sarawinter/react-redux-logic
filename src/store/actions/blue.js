import * as types from './actionTypes';

export const onAdd = (number) => ({
    type: types.ADD,
    payload: number
});

export const onSubtract = (number) => ({
    type: types.SUBTRACT,
    payload: number
});