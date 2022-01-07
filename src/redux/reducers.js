import * as actions from './action'

const initialState = {
    email: '',
    password: '',
    uid: '',
    upComingData: '',
    isLoading: true,
    userToken: null,
    isLogedIn: false,
    orderId: null,
}


function userReducer(state = initialState, action) {
    switch (action.type) {
        
        case actions.USER_INFO:
            return { ...state, uid: action.payload };
        case actions.UPCOMING_DATA:
            return { ...state, upComingData: action.payload };  
        case actions.LOGIN_USER:
            return { ...initialState , userToken: action.payload, isLoading : false };
        case actions.LOGOUT_USER:
            return { ...state, userToken: action.payload,  isLoading : false };
        case actions.ORDER_ID:
            return { ...state, orderId: action.payload, };

        default:
            return state;
    }
}

export default userReducer;
