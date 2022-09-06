import React, { useState, useEffect } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useColorModeValue, Box, Flex, theme, Text } from "@chakra-ui/react";
import NextImage from "next/image";

type CarouselProps = {
  images: string[];
  reverse?: boolean;
};

/**
 * Render a carousel component cycling through a list of images.
 */
const Carousel = ({ images, reverse }: CarouselProps) => {
  const [image, cycleImage] = useCycle(...images);

  useEffect(() => {
    setTimeout(cycleImage, 6000);
  }, [image]);

  return (
    <Flex
      alignSelf="center"
      paddingY={10}
      width="50%"
      height="100%"
      justifyContent="center"
      alignContent="center"
      borderRadius={10}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={image}
          animate={{
            opacity: [0, 1, 0],
            x: reverse ? ["-40%", "0%", "40%"] : ["40%", "0%", "-40%"],
            transition: { duration: 5, ease: "easeInOut" },
          }}
          style={{
            padding: 10,
            borderRadius: "1em",
            textAlign: "center",
            height: "100%",
            backgroundColor: theme.colors.whiteAlpha[800],  
          }}
        >
          <NextImage width={200} height={200}  layout="fixed" src={image} />
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
};

export default Carousel;
export type { CarouselProps };
