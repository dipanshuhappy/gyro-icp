import { Grid } from "@chakra-ui/react";
import HomeHeader from "../../layout/HomeHeader";
import Route from "./components/route";
import React from "react"
const Home = () => {
    return (
    <Grid>
        <HomeHeader />
        <Route />

    </Grid>
    );
};

export default Home;