import asyncComponent from "./hoc/asyncRender";

const Home = asyncComponent(() =>
  import("./components/Home").then(module => module.default)
);

const routes = [
  {
    path: "/",
    component: Home
  }
];

export default routes;
