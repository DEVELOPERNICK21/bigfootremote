import AsyncStorage from '@react-native-async-storage/async-storage';
import { showError, showSuccess } from '../../Screens/ErrorHelperFunction/HelperFunction';



export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const USER_INFO = 'USER_INFO';
export const UPCOMING_DATA = 'UPCOMING_DATA'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const ORDER_ID = 'ORDER_ID'



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

export const setLogIn = setUserToken => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload: setUserToken,
    })
    console.log(setUserToken, "this is the action DIFFERENT loginData value ");
}

export const setLogOut = () => dispatch => {
    dispatch({
        type: LOGOUT_USER,
        payload: null,
    })
    console.log(setUserToken, "this is the action DIFFERENT loginData value ");
}


export const setOrderId = orderId => dispatch => {
    dispatch({
        type: ORDER_ID,
        payload: orderId,
    })
    console.log(orderId, "this is the action orderId value ");
}

export const showJobDetail = Boolean => dispatch => {
    dispatch({
        type: ORDER_ID,
        payload: Boolean,
    })
    console.log(Boolean, "this is the action orderId value ");
}

const setLoginLocal = async (loginData) => {
    try {
        await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
        console.log(loginData, "this is the action ASYNCSTORAGE loginData value ");
        console.log(loginData.user.role, "this is the action ASYNCSTORAGE loginData value ");
    } catch (err) {
        console.log(err);
    }
};




// LOGIN FUNCTION 

export const reduxlogin = (loginInput) => {
    const { userName, passWord } = loginInput;

    console.log(userName, "THIS IS THE USERNAME FROM LOGIN IN ACION")
    console.log(passWord, "THIS IS THE PASSWROD FROM LOGIN IN ACION")
    return (dispatch) => {  // don't forget to use dispatch here!
        {
            userName == '' || passWord == '' ? (
                showError('Login Failed! Username or Password can not be empty')

            )
                :
                fetch("https://bigfoot.reddotapps.com.sg/api/app/login",
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "email": userName,
                            "password": passWord
                        })
                    }
                )
                    .then(response => response.json())
                    .then(async (json) => {
                        console.log(json);
                        let userToken;
                        let userRole;
                        let userData;
                        userToken = json.token.token;
                        userRole = json.user.role.toString();
                        userData = json;
                        if (json.user.email === userName) { // response success checking logic could differ
                            console.log("IT is the MATCH");
                            showSuccess('Login Success')
                            try {
                                await AsyncStorage.setItem('userToken', userToken)
                                await AsyncStorage.setItem('userRole', userRole)
                                const o = { ...json };
                                console.log(o, "IT IS THE OOOOOOOOOOOOOOO DATA");
                                setLoginLocal(o); // storing in local storage for next launch
                                dispatch(setLoginLocal(o));
                            } catch (error) {
                                console.log(error)
                            }
                            dispatch(setLogIn(userToken));
                        } else {
                            // Alert.alert('Login Failed', 'Username or Password is incorrect');
                            showError('Login Failed ! Username or Password is incorrect')
                        }
                    })
                    .catch((err) => {
                        showError('Login Failed ! Username or Password is incorrect')
                        console.log(err);
                    });
        }
    };
};

// LOGOUT FUNCTION 

export const reduxlogout = () => {
    return async dispatch => {
        try {
            await AsyncStorage.removeItem('userToken')
            await AsyncStorage.removeItem('userRole')
            showSuccess('Log-Out the user')
        } catch (error) {
            console.log(error)
        }
        dispatch(setLogOut());

    }
};


//REDUX STORE TOKEN FOR NEXT LAUNCH

export const reduxCheckToken = () => {
    return async dispatch => {

        let userToken;
        userToken = null;
        try {
            userToken = await AsyncStorage.getItem('userToken')
        } catch (error) {
            console.log(error)
        }
        dispatch(setLogIn(userToken)); // our action is called here

    }
};

//REDUX TO SEND ORDER ID WITH NAVIGATING IN THE JOB DETAIL PAGE

export const reduxJobPage = (orderId) => {
    const navigation = useNavigation();

    return async dispatch => {

        let userToken;
        userToken = null;
            try {
              userToken = await AsyncStorage.getItem('userToken')
            } catch (error) {
                console.log(error)
            }
            console.log(userToken, 'AUTHTOKEN FROM Deatil PAGE IS BRINGS A MESSAGE');
    
      fetch("https://bigfoot.reddotapps.com.sg/api/app/get-job-detail", 
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        },
        body:JSON.stringify({
          "job_id":orderId,
        })
      }
      )
      .then(res => res.json())
      .then(async(data)=>{
        console.log(data, 'THIS IS THE DEATIL JOB DATA');
        console.log(data.success, 'THIS IS THE DEATIL JOB DATA');
        if(data.success === true)
        {
            
        }
      })
      .catch(error => {
        console.log('error', error)
      })
    }
};

