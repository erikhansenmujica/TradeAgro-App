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
import { fetchMarkets } from "./store/actions/markets";
import io from "socket.io-client/dist/socket.io.js";
import { addMarkets } from "./store/actions/markets";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
const socket = io("https://tradeagro-api.herokuapp.com/");
const Stack = createStackNavigator();

function App() {
  const dispatch = useDispatch();
  const [fonts] = useFonts({
    RobotoRegular: require("./assets/Roboto/Roboto-Regular.ttf"),
    RobotoBlack: require("./assets/Roboto/Roboto-Black.ttf"),
  });
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchMarkets());
    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token))
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
    setTimeout(() => sendPushNotification(expoPushToken), 5000);
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const products = useSelector((state) => state.products.all);
  const markets = useSelector((state) => state.markets.all);

  socket.on("connect", () => {
    // or with emit() and custom event names
    socket.emit(
      "salutations",
      "Hello!",
      { mr: "john" } //user
    );
  });
  // handle the event sent with socket.send()
  socket.on("newMarkets", (data) => {
    console.log("markets incoming bitch");
    console.log("expo push token: " + expoPushToken);
    sendPushNotification(expoPushToken);
    alert("new markets");
    dispatch(addMarkets(data));
  });

  return fonts ? (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={user() ? "home" : "logIn"}
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
        <Stack.Screen name="CheckMarket">
          {({ navigation }) => (
            <Market markets={markets} navigation={navigation} />
          )}
        </Stack.Screen>
        <Stack.Screen name="logIn" component={logIn} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Text content="Loading..."></Text>
  );
}
// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Nuevas actualizaciones de mercado",
    body: "Entra a mirar la información del mercado en la app de TradeAgro",
    data: { data: "goes here" },
  };
  try {
    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  } catch (error) {
    console.log(error);
  }
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
