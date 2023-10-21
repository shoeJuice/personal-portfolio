import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { Text, Box, Button, Flex, HStack, IconButton } from "@chakra-ui/react";
import {
  motion,
  useInView,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";
import Carousel from "../modules/home/Carousel";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Splash from "../modules/home/Splash";

const Home: NextPage = () => {
  const languagesRef = useRef(null);
  const technologiesRef = useRef(null);

  const languagesInView = useInView(languagesRef);
  const technologiesInView = useInView(technologiesRef);

  const revealLanguages = useAnimationControls();
  const revealTechnologies = useAnimationControls();

  useEffect(() => {
    if (languagesInView) {
      revealLanguages.start({ opacity: [0, 1] });
    } else {
      revealLanguages.start({ opacity: [1, 0] });
    }
  }, [languagesInView]);

  useEffect(() => {
    if (technologiesInView) {
      revealTechnologies.start({ opacity: [0, 1] });
    } else {
      revealTechnologies.start({ opacity: [1, 0] });
    }
  }, [technologiesInView]);

  return (
    <div data-testid="home-page" style={{ overflowX: "hidden" }}>
      <Head>
        <title>Personal Portfolio - Remy Papillon</title>
        <meta
          name="description"
          content="Hi! My name is Remy Papillon, and I am an aspiring web developer."
        />
        <link rel="icon" href="/Avatars-Remy-Alternate.ico" />
      </Head>
      
        <Flex flexDirection="column" height="100%" gap={6} as="main">
          <Flex
            data-testid="hero"
            as="section"
            height="100vh"
            flexDirection={["column", "column", "row", "row"]}
            mb={[20, 20, 0, 0]}
            padding={10}
            alignItems="center"
          >
            <Splash />
            <Box
              order={[1, 1, 2, 2]}
              width={["100%", "100%", "50%", "50%"]}
              height={["50%", "50%", "100%", "100%"]}
              display={["none", "block", "block", "block"]}
              position="relative"
            >
              <motion.div
                key="splashImage"
                animate={{
                  x: ["100%", "0%"],
                  opacity: [0, 1],
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                exit={{
                  x: ["0%", "100%"],
                  opacity: [1, 0],
                }}
              >
                <Image
                  style={{ borderRadius: "2em" }}
                  layout="fill"
                  src="/Happy Bunch - Remy - Desk.svg"
                />
              </motion.div>
            </Box>
          </Flex>

          <Flex
            as="section"
            gap={4}
            paddingX={3}
            paddingY={15}
            height="100%"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={["column", "column", "row", "row"]}
            ref={technologiesRef}
          >
            <Text
              display={["block", "block", "none", "none"]}
              fontSize="4xl"
              mb={2}
            >
              Technologies
            </Text>
            <Carousel
              reverse
              images={[
                "/Jest-logo.svg",
                "/Nextjs-logo.svg",
                "/React-icon.svg",
                "/storybook-logo.svg",
                "/Firebase-logo.svg",
                "/Redux-logo.svg",
              ]}
            />

            <Box width={["100%", "100%", "50%", "50%"]} padding={10}>
              <motion.div
                animate={revealTechnologies}
                style={{ width: "100%", height: "100%" }}
              >
                <Text
                  display={["none", "none", "block", "block"]}
                  fontSize="5xl"
                  mb={2}
                >
                  Technologies
                </Text>
                <Text fontWeight="thin" maxWidth="640px" lineHeight={2.0}>
                  The projects I&apos;ve worked on have given me the opportunity
                  to learn a wide variety of technologies. My stack relies
                  heavily on React and NextJS, and many of my front-end projects
                  use ChakraUI for styling. Other libraries and frameworks I
                  have used include Redux, Jest, Storybook, and Framer-Motion
                  among many others and I am always looking to learn more.
                </Text>
              </motion.div>
            </Box>
          </Flex>

          <Flex
            gap={4}
            paddingX={3}
            paddingY={20}
            height="100%"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={["column", "column", "row", "row"]}
            ref={languagesRef}
          >
            <Text
              display={["block", "block", "none", "none"]}
              fontSize="4xl"
              mb={2}
            >
              Languages
            </Text>
            <Carousel
              images={[
                "/Java-Logo.svg",
                "/JavaScript-Logo.svg",
                "/TypeScript-Logo.svg",
                "/Python.svg",
              ]}
            />

            <Box width={["100%", "100%", "50%", "50%"]} padding={10}>
              <motion.div
                animate={revealLanguages}
                style={{ width: "100%", height: "100%" }}
              >
                <Text
                  display={["none", "none", "block", "block"]}
                  fontSize="5xl"
                  mb={2}
                >
                  Languages
                </Text>
                <Text fontWeight="thin" maxWidth="640px" lineHeight={2.0}>
                  I have a strong background in Python, where it has been used
                  as a primary language of instruction in my university courses.
                  I have used Python in tandem with React to build one of my
                  first full-stack projects. While Python is one of my strongest
                  languages, I otherwise have a strong understanding of
                  Javascript and Typescript. Other languages I have experience
                  with include Java and C++.
                </Text>
              </motion.div>
            </Box>
          </Flex>
        </Flex>
      
    </div>
  );
};

export default Home;
