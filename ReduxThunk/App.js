import React from 'react';
import { Provider } from 'react-redux'
import store from './assets/src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './assets/src/navigator';

const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routers/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;