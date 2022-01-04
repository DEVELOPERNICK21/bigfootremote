import { Alert } from 'react-native'; // to show alerts in app

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const USER_INFO = 'USER_INFO';
export const UPCOMING_DATA = 'UPCOMING_DATA'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

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

export const setUserID = userId => dispatch => {
    dispatch({
        type: USER_INFO,
        payload: userId,
    })
    console.log(userId, "this is the action userId value ");
}

export const setUpcomingJobData = UpcomingJob => dispatch => {
    dispatch({
        type: USER_INFO,
        payload: UpcomingJob,
    })
    console.log(UpcomingJob, "this is the action UPCOMING value ");
}

export const setLogIn = (loginData) => {
    return {
        type: LOGIN_USER,
        payload: loginData,
    }
}

// export const setLogOut = (userToken, email, userData, isLoading) => dispatch => {
//     dispatch({
//         type: LOGOUT_USER,
//         payloadUserToken: userToken,
//         payloadEmail: email,
//         payloadUserData: userData,
//         payloadIsLoading: isLoading,
//     })
//     console.log(userToken, email, userData, isLoading, "this is the action LOGOUT values ");
// }



export const reduxlogin = (loginInput) => {
    const { userName, passWord } = loginInput;
    console.log(userName, "THIS IS THE USERNAME FROM LOGIN IN ACION")
    console.log(passWord, "THIS IS THE PASSWORD FROM LOGIN IN ACION")
    return (dispatch) => {  // don't forget to use dispatch here!
        return fetch(API_URL, {
            method: 'POST',
            headers: {  // these could be different for your API call
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInput),
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.msg === 'success') { // response success checking logic could differ
                    dispatch(setLogIn({ ...json, userId: userName })); // our action is called here
                } else {
                    Alert.alert('Login Failed', 'Username or Password is incorrect');
                }
            })
            .catch((err) => {
                Alert.alert('Login Failed', 'Some error occured, please retry');
                console.log(err);
            });
    };
};