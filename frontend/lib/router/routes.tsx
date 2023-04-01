import type { PathRouteProps } from "react-router-dom";
import Home from "../pages/home";

import React from "react"

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
