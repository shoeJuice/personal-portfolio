import React, { useState, useEffect } from "react";
import { Flex, Container, Box } from "@chakra-ui/react";
import Navbar from "./nav/Navbar";
import { createUseStyles } from "react-jss";


/**
 * Main Layout component wrapping page content
 */
const MainLayout = ({ children }: any) => {
  return (
    <Box data-testid="main-layout" width="100%" height="100%">
      <Navbar />
      <Container maxW="container.xl" height="100%" data-testid="main-container">{children}</Container>
    </Box>
  );
};

export default MainLayout;
