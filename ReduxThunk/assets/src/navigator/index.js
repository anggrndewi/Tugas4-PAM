import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Result} from '../screen';

const Stack = createNativeStackNavigator();

const Routes = ()=>{
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
    );
}

export default Routes;