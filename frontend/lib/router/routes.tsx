import type { PathRouteProps } from "react-router-dom";
import LandingPage from "../pages/landing_page";
import DriverSignup from "../pages/login_pages/Driver";
import RiderSignup from "../pages/login_pages/Rider";
import Home from "../pages/home_page";

import React from "react"
import DriverHomeScreen from "../pages/driver_home";


export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/driversignup",
    element: <DriverSignup />,
  },
  {
    path: "/ridersignup",
    element: <RiderSignup />,
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path:"/driver_home",
    element:<DriverHomeScreen/>
  }
];

export const privateRoutes: Array<PathRouteProps> = [];
