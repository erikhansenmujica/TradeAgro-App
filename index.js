import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Market from "./components/Market";
import { Text } from "./components/Elements";
import { useFonts } from "expo-font";
import logIn from "./components/LogIn";
import Register from "./components/Register";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/actions/products";
import Navbar from "./components/Navbar";
import { fetchMarkets } from "./store/actions/markets";
import io from "socket.io-client/dist/socket.io.js";
import { addMarkets } from "./store/actions/markets";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
const socket = io("https://tradeagro-api.herokuapp.com/");
import Contacts from "./components/Contacts";
import { URL } from "./store/constants";
import { getToken } from "./token";
import JWT from "expo-jwt";

const Stack = createStackNavigator();

function App() {
  const dispatch = useDispatch();
  const [fonts] = useFonts({
    RobotoRegular: require("./assets/Roboto/Roboto-Regular.ttf"),
    RobotoBlack: require("./assets/Roboto/Roboto-Black.ttf"),
  });
  async function tuvieja() {
    const token = await getToken();
    console.log(JWT.decode(token, "shhhhh").dataValues);
  }
  tuvieja();
  //if (getToken()) console.log(JWT.decode(getToken(), "shhhhh"));
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();
  React.useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchMarkets());

    registerForPushNotificationsAsync()
      .then((token) => {
        axios.post(`${URL}/users/addToken`, { token }).catch(console.log);
        setExpoPushToken(token);
      })
      .catch(console.log);

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("received while backgrounded" + notification);
        setNotification(notification);
      }
    );
    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );
    socket.on("newMarkets", (data) => {
      console.log("markets incoming bitch");
      alert("new markets");
      dispatch(addMarkets(data));
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const products = useSelector((state) => state.products.all);
  const markets = useSelector((state) => state.markets.all);
  console.log(products, "prouuuucuuts");
  // socket.on("connect", () => {
  //   // or with emit() and custom event names
  //   socket.emit(
  //     "salutations",
  //     "Hello!",
  //     { mr: "john" } //user
  //   );
  // });
  // handle the event sent with socket.send()

  return fonts ? (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={user() ? "home" : "logIn"}
        initialRouteName={""}
        screenOptions={{
          header: ({ scene, navigation }) => {
            const { options } = scene.descriptor;
            const title = "Carlos Premrou";
            return (
              <Navbar title={title} options={options} navigation={navigation} />
            );
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
                    { label: "contrato 1" },
                    { label: "contrato 2" },
                    { label: "contrato 3" },
                    { label: "contrato 4" },
                  ],
                },
                { type: "Calendar" },
                {
                  defaultValue: "Cantidad",
                  type: "Dropdown",
                  options: [
                    { label: "1" },
                    { label: "2" },
                    { label: "3" },
                    { label: "4" },
                  ],
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
                    { label: "contrato 1" },
                    { label: "contrato 2" },
                    { label: "contrato 3" },
                    { label: "contrato 4" },
                  ],
                },
                { type: "Calendar" },
                {
                  defaultValue: "Cantidad",
                  type: "Dropdown",
                  options: [
                    { label: "1" },
                    { label: "2" },
                    { label: "3" },
                    { label: "4" },
                  ],
                },
                { defaultValue: "Observaciones", type: "Input" },
              ]}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Contacts">
          {({ navigation }) => <Contacts navigation={navigation} />}
        </Stack.Screen>
        <Stack.Screen name="CheckMarket">
          {({ navigation }) => (
            <Market markets={markets} navigation={navigation} />
          )}
        </Stack.Screen>
        <Stack.Screen name="logIn" component={logIn} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Text content="Loading..."></Text>
  );
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
export default App;
