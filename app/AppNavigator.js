import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../app/components/Home';
import Detail from '../app/components/Detail';
import Homes from '../app/components/Homes';
import Login from '../app/components/Login';
import Footer from '../app/components/Footer';
import FooterComponent from '../app/components/Footer';
import ForgotPassword from '../app/components/ForgotPassword';

const Stack = createStackNavigator();

const AppNavigator = () => {


    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login"> 
                    <Stack.Screen name='Home' component={Home}></Stack.Screen>
                    <Stack.Screen name='Detail' component={Detail}></Stack.Screen>
                    <Stack.Screen options= {{headerShown : false}} name='Homes' component={Homes}></Stack.Screen>
                    <Stack.Screen options= {{headerShown : false}} name='Login' component={Login}></Stack.Screen>
                    <Stack.Screen name='FooterComponent' component={FooterComponent}></Stack.Screen>
                    <Stack.Screen name = 'ForgotPassword' component={ForgotPassword}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );

};

export default AppNavigator;