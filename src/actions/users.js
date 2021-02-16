export const User_Request = {
	GET_USERS_REQUEST: 'users/get_users_request',
	GET_USERS_SUCCESS: 'users/get_users_success',
	DELETE_USER_REQUEST: 'users/delete_user_request',
    CREATE_USER_REQUEST: 'users/create_user_request',
    USERS_ERROR: 'users/user_error'
};

export const getUsersRequest = () => ({
	type: User_Request.GET_USERS_REQUEST
});

export const getUsersSuccess = ({items}) => ({
	type: User_Request.GET_USERS_SUCCESS,
	payload: {
		items
	}
});

export const createUserRequest = ({firstName, lastName}) => ({
    type: User_Request.CREATE_USER_REQUEST,
    payload: {
        firstName,
        lastName
    }
});

export const deleteUserRequest = (userId) => ({
    type: User_Request.DELETE_USER_REQUEST,
    payload: {
        userId
    }
});

export const usersError = ({error}) => ({
    type: User_Request.USERS_ERROR,
    payload: {
        error
    }
});