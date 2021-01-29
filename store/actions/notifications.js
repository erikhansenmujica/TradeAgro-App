import { ADD_NOTIFICATIONS } from "../constants";

export const addNotificationsNumber = (number) => ({
  type: ADD_NOTIFICATIONS,
  payload: number,
});
