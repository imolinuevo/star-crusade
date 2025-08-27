import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("", "./modules/guards/unprotected-route.tsx", [
    route("/login", "./modules/login.tsx"),
  ]),
  route("app", "./modules/guards/protected-route.tsx", [
    route("dashboard", "./modules/dashboard.tsx"),
  ]),
  route("*", "./modules/guards/catchall.tsx"),
] satisfies RouteConfig;
