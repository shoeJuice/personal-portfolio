import React, { useState, useEffect } from "react";
import { Flex, Container, Box } from "@chakra-ui/react";
import Navbar from "./nav/Navbar";

/**
 * Main Layout component wrapping page content
 */
const MainLayout = ({ children }: any) => {
  return (
    <Flex data-testid="main-layout">
      <Navbar />
      <Container data-testid="main-container">{children}</Container>
    </Flex>
  );
};

export default MainLayout;
