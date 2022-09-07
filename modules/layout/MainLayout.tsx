import React, { useState, useEffect } from "react";
import { Flex, Container, Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./nav/Navbar";
import Footer from "./Footer";
import { createUseStyles } from "react-jss";

const useBackgroundStyles = createUseStyles({
  backgroundDesign: {},
});

/**
 * Main Layout component wrapping page content
 */
const MainLayout = ({ children }: any) => {
  const styles = useBackgroundStyles();

  return (
    <Box
      color={useColorModeValue("gray.900", "whiteAlpha.900")}
      data-testid="main-layout"
      width="100%"
    >
      <Navbar />
      <Box
        maxW="100%"
        height="100%"
        position="relative"
        data-testid="main-container"
        zIndex={1}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
