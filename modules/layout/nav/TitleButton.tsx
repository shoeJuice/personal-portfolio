import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
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
  
    return <Button data-testid="title-button" variant="unstyled" fontSize="2xl" onClick={() => router.push("/")} ref={ref}>{props.name}</Button>;
});

TitleButton.displayName = "TitleButton";

const MotionTitleButton = motion(TitleButton);

export default MotionTitleButton;