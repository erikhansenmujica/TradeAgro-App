import AsyncStorage from "@react-native-community/async-storage";

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("@auth_token");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem("@auth_token", token);
  } catch (e) {
    console.log(e)
    return null;
  }
};
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("@auth_token");
  } catch (e) {
    return null;
  }
};

export const getNotifications = async () => {
  try {
    const value = await AsyncStorage.getItem("@notifications_number");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setNotifications = async (nots) => {
  try {
    await AsyncStorage.setItem("@notifications_number", nots);
  } catch (e) {
    return null;
  }
};
export const removeNotifications = async () => {
  try {
    await AsyncStorage.removeItem("@notifications_number");
  } catch (e) {
    return null;
  }
};
