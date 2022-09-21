import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Flex,
  Container,
  Box,
  useColorModeValue,
  HStack,
  IconButton,
  Stack,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import ColorModeSwitcher from "../../display/ColorModeSwitcher";

/**
 * Navigation component
 */
const Navigation = () => {
  const [show, setShow] = useState(false);
  const mobileShowNav = show ? "flex" : "none";
  return (
    <Flex
      data-testid="navbar"
      flexDirection={["column", "column", "row"]}
      color={useColorModeValue("gray.900", "white")}
      width="100%"
      padding={4}
      justifyContent="flex-end"
      alignItems="center"
      gap={4}
      position="relative"
      zIndex={5}
    >
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl">Remy Papillon</Text>
        <HStack>
          <IconButton
            colorScheme="purple"
            aria-label="toggle navigation menu"
            icon={<HamburgerIcon />}
            alignSelf="flex-end"
            onClick={() => setShow(!show)}
            display={["flex", "flex", "none", "none"]}
          />
          <ColorModeSwitcher display={["flex", "flex", "none", "none"]} />
        </HStack>
      </Flex>
      <Stack
        spacing={2}
        direction={["column", "column", "row", "row"]}
        display={[mobileShowNav, mobileShowNav, "flex", "flex"]}
        width={show ? "100%" : "auto"}
        alignItems="center"
      >
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link>About</Link>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Link>Projects</Link>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Link>Contact</Link>
        </NextLink>
        <NextLink href="/Remsfield_Papillon_Resume.pdf" passHref>
          <Button colorScheme="purple">Resume</Button>
        </NextLink>
      </Stack>
      <ColorModeSwitcher display={["none", "none", "flex", "flex"]} />
    </Flex>
  );
};

export default Navigation;
