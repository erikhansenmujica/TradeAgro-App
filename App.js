
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home"
import OrderForm from "./components/OrderForm"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OrderFertilizer" component={OrderForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
