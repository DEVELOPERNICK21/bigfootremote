import React from 'react'
import Routes from './src/Navigation/Routes'
//3rd Party packages
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <>
      <Provider store={store} >
          <Routes />
          <FlashMessage position="top" />
      </Provider>
    </>
  )
}

export default App
