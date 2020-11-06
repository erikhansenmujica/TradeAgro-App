
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home"
import OrderForm from "./components/OrderForm"
import Quotas from "./components/Quotas"
import Market from "./components/Market"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OrderFertilizer" component={OrderForm} />
        <Stack.Screen name="OrderTrucks" component={OrderForm} />
        <Stack.Screen name="CheckQuotas" component={Quotas} />
        <Stack.Screen name="CheckMarket" component={Market} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
