import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Import Screen
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

export default function App(){
  return(
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
       <Stack.Screen name="Login" component={Login} options={{headerShown: true}}/>
       <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
     </Stack.Navigator>
   </NavigationContainer> 
  )
}