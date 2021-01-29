import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Market from "./components/Market";
import * as font from "expo-font";
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
import Contacts from "./components/Contacts";
import { URL } from "./store/constants";
const socket = io(URL);
import { getNotifications, getToken, setNotifications } from "./token";
import JWT from "expo-jwt";
import { addUser } from "./store/actions/user";
import PendingConfirmation from "./components/PendingConfirmation";
import { addNotificationsNumber } from "./store/actions/notifications";
import { Text } from "react-native";
import RejectedUser from "./components/RejectedUser";

const Stack = createStackNavigator();
const loadFonts = async () => {
  return font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
  });
};
function App() {
  const dispatch = useDispatch();
  const notificationsNumber = useSelector(
    (state) => state.notifications.number
  );

  const products = useSelector((state) => state.products.all);
  const markets = useSelector((state) => state.markets.all);
  const user = useSelector((state) => state.user.data);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [fonts, setFonts] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  async function setNots() {
    if (notificationsNumber) await setNotifications(notificationsNumber);
  }
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchMarkets());
    async function authTokenRequire() {
      const token = await getToken();
      if (token) {
        dispatch(addUser(JWT.decode(token, "shhhhh").dataValues));
        loadFonts().then(() => {
          setFonts(true);
        });
      } else {
        loadFonts().then(() => {
          setFonts(true);
        });
      }
    }
    authTokenRequire();
    async function requireNotificationsNumber() {
      const notifications = await getNotifications();
      dispatch(addNotificationsNumber(notifications));
    }
    requireNotificationsNumber();
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

      dispatch(addNotificationsNumber(true));
      dispatch(addMarkets(data));
    });

    return () => {
      setNots();
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  // socket.on("connect", () => {
  //   // or with emit() and custom event names
  //   socket.emit(
  //     "salutations",
  //     "Hello!",
  //     { mr: "john" } //user
  //   );
  // });
  // handle the event sent with socket.send()

  if (!fonts) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          user
            ? user.access_level == 1
              ? ""
              : user.access_level == 2
              ? "rejectedUser"
              : "PendingConfirmation"
            : "logIn"
        }
        screenOptions={{
          header: ({ scene, navigation }) => {
            const { options } = scene.descriptor;
            return <Navbar options={options} navigation={navigation} />;
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="PendingConfirmation"
          component={PendingConfirmation}
        />
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
        <Stack.Screen name="rejectedUser" component={RejectedUser} />
      </Stack.Navigator>
    </NavigationContainer>
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
