import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cari from './FiturSearch/keterangan.js';
import HasilPencarian from './HasilPencarian/keterangan.js';

const Stack = createNativeStackNavigator();
const options = { headerShown: false };

class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Cari" screenOptions={options}>
                    <Stack.Screen name="Cari" component={Cari} />
                    <Stack.Screen name="HasilPencarian" component={HasilPencarian} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;