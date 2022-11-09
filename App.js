import * as React from 'react';
import {Home} from './screens/Home';
import {Todos} from './screens/Todos';
import {AddUser} from './screens/AddUser';
import {GetUser} from './screens/GetUser';
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
