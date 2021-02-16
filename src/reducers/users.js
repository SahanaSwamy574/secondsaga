import {User_Request} from '../actions/users';

const INITIAL_STATE = {
    items: []
};

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case User_Request.GET_USERS_SUCCESS:{
            return {
                ...state,
                items: action.payload.items
            }
        }
        case User_Request.USERS_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
}