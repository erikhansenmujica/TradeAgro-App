import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Market from "./components/Market";
import { Text } from "./components/Elements";
import { useFonts } from "expo-font";
import logIn from "./components/LogIn";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/actions/products";
import Navbar from "./components/Navbar";

const Stack = createStackNavigator();

function App() {
  const dispatch = useDispatch();
  const [fonts] = useFonts({
    RobotoRegular: require("./assets/Roboto/Roboto-Regular.ttf"),
    RobotoBlack: require("./assets/Roboto/Roboto-Black.ttf"),
  });
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const products = useSelector((state) => state.products.all);
  return fonts ? (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName={user() ? "home" : "logIn"}
        headerMode="screen"
        screenOptions={{
          header: ({ scene, navigation }) => {
            const { options } = scene.descriptor;
            const title = "Carlos Premrou";
            return (
              <Navbar
                title={title}
                options={options}
                navigation={navigation}
              />
            );
          },
          headerStyle: {
            // height: "10%",
            // display: "flex",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OrderFertilizer">
          {({ navigation }) => (
            <OrderForm
              navigation={navigation}
              title="Pedido de Fertilizante"
              inputs={[
                {
                  defaultValue: "Producto",
                  type: "Dropdown",
                  options: products,
                },

                {
                  defaultValue: "Cantidad",
                  type: "Dropdown",
                  options: [
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                  ],
                },
                { type: "Calendar" },
                { defaultValue: "Observaciones", type: "Input" },
              ]}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="OrderTrucks">
          {({ navigation }) => (
            <OrderForm
              navigation={navigation}
              title="Pedido de Camiones"
              inputs={[
                {
                  defaultValue: "Contrato",
                  type: "Dropdown",
                  options: [
                    "contrato 1",
                    "contrato 2",
                    "contrato 3",
                    "contrato 4",
                  ],
                },
                { type: "Calendar" },
                {
                  defaultValue: "Cantidad",
                  type: "Dropdown",
                  options: [1, 2, 3, 4],
                },
                { defaultValue: "Observaciones", type: "Input" },
              ]}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="CheckQuotas">
          {({ navigation }) => (
            <OrderForm
              navigation={navigation}
              title="Pedido de Cupos"
              inputs={[
                {
                  defaultValue: "Contrato",
                  type: "Dropdown",
                  options: [
                    "contrato 1",
                    "contrato 2",
                    "contrato 3",
                    "contrato 4",
                  ],
                },
                { type: "Calendar" },
                {
                  defaultValue: "Cantidad",
                  type: "Dropdown",
                  options: [1, 2, 3, 4],
                },
                { defaultValue: "Observaciones", type: "Input" },
              ]}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="CheckMarket" component={Market} />
        <Stack.Screen name="logIn" component={logIn} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Text content="Loading..."></Text>
  );
}

export default App;
