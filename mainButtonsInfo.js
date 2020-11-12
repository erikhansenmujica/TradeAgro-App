import {imageFertilizer, imageTrucks, imageQuotas, imageMarket} from "./assets/icons"

const fertilizer = {
  title1: "Pedir",
  title2: "Fertilizantes",
  name: "OrderFertilizer",
  image: imageFertilizer,
};
const trucks = {
  title1: "Pedir",
  title2: "Camiones",
  name: "OrderTrucks",
  image: imageTrucks,
};
const quotas = {
  title1: "Consultar",
  title2: "Cupos",
  name: "CheckQuotas",
  image: imageQuotas,
};
const market = {
  title1: "Consultar",
  title2: "Mercado",
  name: "CheckMarket",
  image: imageMarket,
};

const mainButtons = [fertilizer, trucks, quotas, market];

export default mainButtons;
