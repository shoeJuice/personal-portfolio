import React, { useState, useEffect } from "react";
import { Flex, Container, Box, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

/**
 * Navigation component
 */
const Navigation = () => {
  return (
    <Flex
      data-testid="navbar"
      flexDirection="row"
      color={useColorModeValue("white", "black")}
      width="100%"
      padding={4}
      mb={20}
      justifyContent="flex-end"
      gap={4}
    >
        
        <NextLink href="/" passHref>
            <a>Home</a>
        </NextLink>
        <NextLink href="/" passHref>
            <a>Projects</a>
        </NextLink>
        <NextLink href="/" passHref>
            <a>Contact</a>
        </NextLink>
    </Flex>
  );
};

export default Navigation;
