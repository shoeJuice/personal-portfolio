import React, { useEffect, useState } from "react";
import {
  Button,
  useColorModeValue,
  useColorMode,
  theme,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

type NavLinkProps = {
  route: string;
};

/**
 * Render a link to a page
 */
const NavLink = ({ route }: NavLinkProps) => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const mobileActiveColor = useColorModeValue("purple.600", "purple.300");
  const desktopActiveColor = useColorModeValue("purple.500", "purple.300");
  const mobileHoverColor = useColorModeValue("purple.400", "purple.200");
  const desktopHoverColor = useColorModeValue("purple.300", "purple.200");
  return route === "Home" ? (
    <NextLink href={"/"} passHref>
      <Button
        variant="unstyled"
        fontWeight={["medium", "medium", "normal", "normal"]}
        _hover={{
          color: [
            mobileHoverColor,
            mobileHoverColor,
            desktopHoverColor,
            desktopHoverColor,
          ],
        }}
        _active={{
          color: [
            mobileActiveColor,
            mobileActiveColor,
            desktopActiveColor,
            desktopActiveColor,
          ],
        }}
      >
        {route}
      </Button>
    </NextLink>
  ) : (
    <NextLink href={`/${route.toLowerCase()}`} passHref>
      <Button
        variant="unstyled"
        fontWeight={["medium", "medium", "normal", "normal"]}
        _hover={{
          color: [
            mobileHoverColor,
            mobileHoverColor,
            desktopHoverColor,
            desktopHoverColor,
          ],
        }}
        _active={{
          color: [
            mobileActiveColor,
            mobileActiveColor,
            desktopActiveColor,
            desktopActiveColor,
          ],
        }}
        _focus={{ color: colorMode == "dark" ? "purple.200" : "purple.400" }}
        isActive={router.route.includes(`/${route.toLowerCase()}`)}
      >
        {route}
      </Button>
    </NextLink>
  );
};

export default NavLink;
