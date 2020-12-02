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
import logIn from "./components/LogIn";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/actions/products";

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
  console.log(products);
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
                  defaultValue: "Cantidad en kilos",
                  type: "InputShort",
                },
                { type: "Calendar" },
                { defaultValue: "Observaciones", type: "Input" },
              ]}
              sendButton={true}
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
              sendButton={true}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="CheckQuotas">
          {({ navigation }) => (
            <OrderForm
              navigation={navigation}
              title="Pedido de Cupos"
              sendButton={true}
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
        <Stack.Screen name="Contacts">
          {({ navigation }) => (
            <OrderForm
              navigation={navigation}
              title="Consultas"
              sendButton={false}
              list={[
                { name: "Juan Caraffo", phone: "+5492262561476" },
                { name: "Claudio Rivero", phone: "+5492262484006" },
                { name: "Martin Davico", phone: "+5492262618133" },
                { name: "Alejandro Ibañez", phone: "+5492262578703" },
                { name: "Pablo Pizzi", phone: "+5492262574637" },
                { name: "Carlos Premrou", phone: "+5492262562234" },
                { name: "Alberto Caraffo", phone: "+5492262567626" },
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
