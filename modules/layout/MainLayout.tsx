import React, { useState, useEffect } from "react";
import { Flex, Container, Box } from "@chakra-ui/react";
import Navbar from "./nav/Navbar";
import { createUseStyles } from "react-jss";


const useBackgroundStyles = createUseStyles({
    backgroundDesign: {
        
    }
});

/**
 * Main Layout component wrapping page content
 */
const MainLayout = ({ children }: any) => {

    const styles = useBackgroundStyles();

  return (
    <Box className={styles.backgroundDesign} data-testid="main-layout" width="100%" height="100%">
      <Navbar />
      <Box maxW="100%" height="100%" data-testid="main-container">{children}</Box>
    </Box>
  );
};

export default MainLayout;
