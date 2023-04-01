import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

// import Footer from "./Footer";
// import Header from "./Header";
// import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};
import React from "react"
const Layout = ({ children }: LayoutProps) => {
  return (
    <Box as="main" marginY={0}>
      {children}
    </Box>
  );
};

export default Layout;
