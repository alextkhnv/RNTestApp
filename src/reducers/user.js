import {
    UPDATE_USER
} from '../constants/ActionTypes'

const initialState = {
    firstName: '',
    lastName: '',
    logo: '',
    id: 0
};

export default function user(state = initialState, action) {
    switch (action.type) {

        case UPDATE_USER:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                logo: action.logo ? action.logo : state.logo,
            };

        default:
            return state
    }
}