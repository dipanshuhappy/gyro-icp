import { Grid, Heading } from "@chakra-ui/react";

import Header from "../../layout/Header";

import FAQ from "./components/faq";
// import Header from "lib/layout/Header";

// /home/nithin/gyro-frontend/src/lib/pages/home/components/Landing_view.tsx
// import CTASection from "./components/Landing_view";
import OnChain100 from "./components/SomeTextandImage";
import WhyToUse from "./components/WhyToUse";
import ChooseOne from "./components/category";
import LandingView from "./components/Landing_view";
import React, { useEffect } from "react"
const LandingPage = () => {

  return (
    <Grid>
      <Header />
      <LandingView />
      <WhyToUse />
      <OnChain100 />
      <ChooseOne />
      <FAQ />
    </Grid>
  );
};

export default LandingPage;
