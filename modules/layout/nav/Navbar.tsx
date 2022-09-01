import React, { useState, useEffect } from "react";
import { Flex, Container, Box } from "@chakra-ui/react";
import NextLink from "next/link";

/**
 * Navigation component
 */
const Navigation = () => {
  return (
    <Flex
      data-testid="navbar"
      flexDirection={["row", "row", "column", "column"]}
      backgroundColor="#1B264F"
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
