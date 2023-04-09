import { Grid, Box } from "@chakra-ui/react";
import HomeHeader from "../../layout/HomeHeader";
import Route from "./components/route";
import React from "react"
const Home = () => {
    return (
    // <Box w="100%" h="100%" bgGradient="linear(to-l,  gray.700, #4F0079)">
    <Grid>
        <HomeHeader />
        <Route />

    </Grid>
    // </Box>
    );
};

export default Home;