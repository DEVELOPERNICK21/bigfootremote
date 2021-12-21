export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const API_URL = 'https://bigfoot.reddotapps.sg/api/app/login';

export const setUserEmail = email => dispatch => {
    dispatch({
        type: SET_USER_EMAIL,
        payload: email,
    })
    console.log(email, "this is the action email value ");
}

export const setUserPassword = password => dispatch => {
    dispatch({
        type: SET_USER_PASSWORD,
        payload: password,
    })
    console.log(password, "this is the action password value ");
}

export const setUserLogin = (userToken, userEmail, userPassword, isLoading) => dispatch => {
    dispatch({
        type: LOGIN,
        payload: 
            userToken,
            userEmail,
            userPassword,
            isLoading,
    })
    console.log(userToken, userEmail, "this is the action password value ");
}

export const setUserLogout = logout => dispatch => {
    dispatch({
        type: LOGOUT,
        payload: logout,
    })
    console.log(logout, "this is the action password value ");
}
