import React, { useEffect, useState } from "react";
import {
  IconButton,
  theme,
  useChakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

/**
 * Render a color mode switcher button.
 */
const ColorModeSwitcher = ({ display }: any) => {
  const { colorMode, toggleColorMode } = useChakra();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      display={display}
      colorScheme="purple"
      alignSelf="flex-end"
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Color Mode"
      onClick={() => toggleColorMode()}
    />
  );
};

export default ColorModeSwitcher;
