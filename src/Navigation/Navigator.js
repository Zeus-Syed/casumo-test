import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Home from '../Screens/view-cards';
// import login from "../screens/authenticate/login"
const Stack = createStackNavigator();


const AppNavigator = () => {
  
      return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName= "Home" >
         
            <Stack.Screen name="Home" component={Home} 
          options={{headerShown:false}} />
          
        </Stack.Navigator>
      </NavigationContainer>
      )
  }
  export default AppNavigator;
