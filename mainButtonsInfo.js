import {
  imageFertilizer,
  imageTrucks,
  imageQuotas,
  imageMarket,
} from "./assets/icons";

const fertilizer = {
  title1: "Pedir",
  title2: "Fertilizantes",
  name: "OrderFertilizer",
  image: imageFertilizer,
  notifications: "0",
};
const trucks = {
  title1: "Pedir",
  title2: "Camiones",
  name: "OrderTrucks",
  image: imageTrucks,
  notifications: "",
};
const quotas = {
  title1: "Consultar",
  title2: "Cupos",
  name: "CheckQuotas",
  image: imageQuotas,
  notifications: "66",
};
const market = {
  title1: "Consultar",
  title2: "Mercado",
  name: "CheckMarket",
  image: imageMarket,
  notifications: "321",
};

const mainButtons = [fertilizer, trucks, quotas, market];

export default mainButtons;
