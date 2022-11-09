import * as React from 'react';
import {Home} from './pages/Home';
import {Todos} from './pages/Todos';
import {AddUser} from './pages/AddUser';
import {GetUser} from './pages/GetUser';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Todos" component={Todos} />
        <Stack.Screen name="Add User" component={AddUser} />
        <Stack.Screen name="Get User" component={GetUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
