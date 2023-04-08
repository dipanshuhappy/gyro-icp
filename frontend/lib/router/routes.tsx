import type { PathRouteProps } from "react-router-dom";
import Home from "../pages/landing_page";
import DriverSignup from "../pages/login_pages/Driver";
import RiderSignup from "../pages/login_pages/Rider";

import React from "react"


export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/driversignup",
    element: <DriverSignup />,
  },
  {
    path: "/ridersignup",
    element: <RiderSignup />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
