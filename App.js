import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Quotas from "./components/Quotas";
import Market from "./components/Market";
import { Text } from "./components/Elements";
import { useFonts } from "expo-font";
import { Button, Image, View } from "react-native";
import { logo } from "./assets/icons";
import style from "./generalStyles";
import { SimpleLineIcons } from "@expo/vector-icons";
const Stack = createStackNavigator();

function App() {
  const [fonts] = useFonts({
    RobotoRegular: require("./assets/Roboto/Roboto-Regular.ttf"),
    RobotoBlack: require("./assets/Roboto/Roboto-Black.ttf"),
  });

  return fonts ? (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title = "Carlos Premrou";
            return (
              <View
                title={title}
                leftButton={
                  previous ? <Button onPress={navigation.goBack} /> : undefined
                }
                style={options.headerStyle}
              >
                <View style={{ overflow: "hidden", maxWidth: 57 }}>
                  <Image source={logo} style={style.HeaderLogo}></Image>
                </View>
                <Text
                  content="Carlos Premrou"
                  style={{
                    marginTop: 100,
                    fontSize: 18,
                    position: "absolute",
                    top: -50,
                    right: 150,
                  }}
                  type="black"
                ></Text>
                <View style={{ position: "absolute", right: 15, top: 50 }}>
                  <SimpleLineIcons
                    name="options-vertical"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            );
          },
          headerStyle: {
            height: "10%",
            display: "flex",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OrderFertilizer">
          {(navigation) => (
            <OrderForm
              navigation={navigation}
              title="Pedido de Fertilizante"
              inputs={[
                {
                  defaultValue: "Contrato",
                  type: "Dropdown",
                  options: [
                    { label: "Contrato 1", value: "contrato 1" },
                    { label: "Contrato 2", value: "contrato 2" },
                    { label: "Contrato 3", value: "contrato 3" },
                    { label: "Contrato 4", value: "contrato 4" },
                  ],
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
          {(navigation) => (
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
          {(navigation) => (
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
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Text content="Loading..."></Text>
  );
}

export default App;
