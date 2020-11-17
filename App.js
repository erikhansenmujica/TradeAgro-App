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
    RobotoMedium: require("./assets/Roboto/Roboto-Regular.ttf"),
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
                { defaultValue: "Contrato", type: "Dropdown" },
                { type: "Calendar" },
                { defaultValue: "Cantidad", type: "Dropdown" },
                { defaultValue: "Observaciones", type: "Input" },
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
    <Text content="Loading..."></Text>
  );
}

export default App;
