import * as actions from './action'

const initialState = {
    email: '',
    password: '',
    userDetail: {},
    isLoading: true,
    userToken: null,
}


function userReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_USER_EMAIL:
            return { ...state, email: action.payload };
        case actions.SET_USER_PASSWORD:
            return { ...state, password: action.payload };
        case actions.USER_INFO:
            return { ...state, userDetail: action.payload };
        case actions.LOGIN:
                return {
                    ...state,
                    userToken: action.payload.userToken,
                    email: action.payload.userEmail,
                    isLoading: false,
                };
        case actions.LOGOUT:
                    return {
                        ...state,
                        userToken: null,
                        email: null,
                        isLoading: false,
                    };
        default:
            return state;
    }
}

export default userReducer;
