import CartScreen from "./srceens/CartScreen";
import Error404Screen from "./srceens/Error404screen";
import HomeScreen from "./srceens/HomeScreen";
import ProductScreen from "./srceens/ProductScreen";
import { parceRequestUrl } from "./utils";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
  "/cart/:id": CartScreen,
  "/cart": CartScreen,
};
const router = async () => {
  const request = parceRequestUrl();
  const parseUrl =
    (request.resourse ? `/${request.resourse}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById("main-container");
  main.innerHTML = await screen.render();
  await screen.after_render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
