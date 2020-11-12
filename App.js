import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Quotas from "./components/Quotas";
import Market from "./components/Market";
import { Image, Text } from "react-native";
import styles from "./generalStyles";
import background from "./assets/fondoMovil.png";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

function App() {
  const fonts = useFonts({
    RobotoMedium: require("./assets/Roboto/Roboto-Medium.ttf"),
  });

  return fonts ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
          cardOverlayEnabled: true,
          cardOverlay: () => (
            <Image source={background} style={styles.ImageBackground} />
          ),
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OrderFertilizer">
          {(navigation) => (
            <OrderForm
              navigation={navigation}
              title="Pedido de Fertilizante"
              inputs={[
                { defaultValue: "Contrato" },
                { defaultValue: "Cantidad" },
              ]}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="OrderTrucks" component={OrderForm} />
        <Stack.Screen name="CheckQuotas" component={Quotas} />
        <Stack.Screen name="CheckMarket" component={Market} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  );
}

export default App;
