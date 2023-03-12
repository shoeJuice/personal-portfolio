import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, useChakra } from "@chakra-ui/react";
import { useRouter } from "next/router";

type TitleButtonProps = {
  name: string;
};

/**
 * Title button component that displays name and upon click, redirects to home page.
 *
 * @param {String} name - Name of button
 */
const TitleButton = React.forwardRef((props: TitleButtonProps, ref: any) => {
    const router = useRouter();
    const { colorMode, toggleColorMode } = useChakra();
    const isDark = colorMode === "dark";
  
    const color = isDark ? "white" : "blackAlpha.900";
    return <Button data-testid="title-button" variant="unstyled" color={color} fontSize="2xl" onClick={() => router.push("/")} ref={ref}>{props.name}</Button>;
});

TitleButton.displayName = "TitleButton";

const MotionTitleButton = motion(TitleButton);

export default MotionTitleButton;