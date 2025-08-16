import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./modules/login.tsx"),
  route("dashboard", "./modules/dashboard.tsx"),
] satisfies RouteConfig;
