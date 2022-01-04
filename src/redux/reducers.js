import * as actions from './action'

const initialState = {
    email: '',
    password: '',
    uid: '',
    upComingData: '',
    isLoading: true,
    userToken: null,
    isLogedIn: false,

}


function userReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_USER_EMAIL:
            return { ...state, email: action.payload };
        case actions.SET_USER_PASSWORD:
            return { ...state, password: action.payload };
        case actions.USER_INFO:
            return { ...state, uid: action.payload };
        case actions.UPCOMING_DATA:
            return { ...state, upComingData: action.payload };
        case actions.LOGIN_USER:
            return {
                ...state,
                ...action.payload, // this is what we expect to get back from API call and login page input
                isLoggedIn: true, // we set this as true on login
            };
        // case actions.LOGIN_USER:
        //     return { ...state, userToken: action.payloadUserToken, payloadEmail: email, payloadIsLoading:  isLoading  };

        default:
            return state;
    }
}

export default userReducer;
