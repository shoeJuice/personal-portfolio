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
      paddingY={20}
      width="50%"
      height="100%"
      justifyContent="center"
      alignContent="center"
      backgroundColor="#3182ce"
      borderRadius={10}
    >
      <AnimatePresence>
        <motion.div
          key={image}
          animate={{
            opacity: [0, 1, 0],
            x: reverse ? [-150, 0, 150] : [150, 0, -150],
            transition: { duration: 5, ease: "easeInOut" },
          }}
          style={{
            padding: 20,
            borderRadius: "1em",
            textAlign: "center",
            backgroundColor: theme.colors.whiteAlpha[800],
          }}
        >
          <NextImage width={200} height={200} layout="fixed" src={image} />
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
};

export default Carousel;
export type { CarouselProps };
