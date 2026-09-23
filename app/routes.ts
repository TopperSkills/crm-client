import {
  type RouteConfig,
  index,
  layout,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/blank/BlankLayout.tsx", [
    index("./routes/views/home/HomePage.tsx"),
  ]),
  ...prefix("admin", [
    layout("./layouts/admin/AdminLayout.tsx", [
      index("./routes/admin/dashboard/Dashboard.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
