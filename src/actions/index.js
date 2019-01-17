import {
    UPDATE_USER
} from '../constants/ActionTypes';

export const updateUser = data => ({
    type: UPDATE_USER,
    ...data
});