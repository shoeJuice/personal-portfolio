import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
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
  theme,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import TitleButton from "./TitleButton";
import ColorModeSwitcher from "../../display/ColorModeSwitcher";
import NavLink from "./NavLink";

/**
 * Navigation component
 */
const Navigation = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const mobileShowNav = show ? "flex" : "none";

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      console.log("Execution");
      setShow(false);
    });
  }, []);

  return (
    <Flex
      data-testid="navbar"
      flexDirection={["column", "column", "row"]}
      color={useColorModeValue("gray.900", "white")}
      bg={[useColorModeValue("whiteAlpha.400", "blackAlpha.400"), useColorModeValue("whiteAlpha.400", "blackAlpha.400"), "transparent", "transparent"]}
      backdropFilter={["auto", "auto", "none", "none"]}
      backdropBlur={["md", "md", "none", "none"]}
      width="100%"
      padding={4}
      justifyContent="flex-end"
      alignItems="center"
      gap={4}
      position={["sticky", "sticky", "relative", "relative"]}
      top="-1"
      zIndex={70}
    >
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <TitleButton
          name="Remy Papillon"
        />
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
        position="relative"
        zIndex={99999}
        height={show ? "100vh" : "auto"}
        alignItems="center"
      >
        <NavLink route="Home" />
        <NavLink route="About" />
        <NavLink route="Projects" />
        <NavLink route="Contact" />
        <NextLink href="/Remsfield_Papillon_Resume.pdf" passHref>
          <Button colorScheme="purple">Resume</Button>
        </NextLink>
        <HStack display={["flex", "flex", "none", "none"]}>
          <IconButton colorScheme="purple" aria-label="Github Link" icon={<BsLinkedin />}/>
          <IconButton colorScheme="purple" aria-label="LinkedIn Link" icon={<BsGithub />}  />
        </HStack>
      </Stack>
      <ColorModeSwitcher display={["none", "none", "flex", "flex"]} />
    </Flex>
  );
};

export default Navigation;
