import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { Text, Box, Button, Flex, HStack, IconButton } from "@chakra-ui/react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import Carousel from "../modules/home/Carousel";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
          <Box
            order={[2, 2, 1, 1]}
            width={["100%", "100%", "50%", "50%"]}
            margin="auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1],
                transition: {
                  delay: 0.5,
                },
              }}
            >
              <Text fontSize={["5xl", "3xl", "5xl", "7xl"]}>
                Hi! I&apos;m Remy!
              </Text>
              <Text fontSize={["xl", "xl", "4xl"]} mb={5}>
                Front-End Developer
              </Text>
              <Text maxWidth="640px" fontWeight="thin" lineHeight={2.0}>
                Student by day, developer by night. I am a self-taught
                web developer with a passion for learning and problem solving.
              </Text>
              <NextLink href="/contact" passHref>
                <Button mt={4} colorScheme="purple">
                  Contact Me!
                </Button>
              </NextLink>
              <HStack mt={2}>
                <NextLink href="https://github.com/shoeJuice">
                  <IconButton
                    aria-label="GitHub"
                    variant="ghost"
                    colorScheme="purple"
                    icon={<BsGithub />}
                  />
                </NextLink>
                <NextLink href="https://www.linkedin.com/in/remsfield-papillon">
                  <IconButton
                    aria-label="LinkedIn"
                    variant="ghost"
                    colorScheme="purple"
                    icon={<BsLinkedin />}
                  />
                </NextLink>
              </HStack>
            </motion.div>
          </Box>

          <Box
            order={[1, 1, 2, 2]}
            width={["100%", "100%", "50%", "50%"]}
            height={["50%", "50%", "100%", "100%"]}
            position="relative"
          >
            <motion.div
              animate={{
                x: ["100%", "0%"],
                opacity: [0, 1],
              }}
              style={{
                width: "100%",
                height: "100%",
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
                to learn a wide variety of technologies. My stack relies heavily
                on React and NextJS, and many of my front-end projects use
                ChakraUI for styling. Other libraries and frameworks I have used
                include Redux, Jest, Storybook, and Framer-Motion among many
                others and I am always looking to learn more.
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
                I have a strong background in Python, where it has been used as
                a primary language of instruction in my university courses. I
                have used Python in tandem with React to build one of my first
                full-stack projects. While Python is one of my strongest
                languages, I otherwise have a strong understanding of Javascript
                and Typescript. Other languages I have experience with
                include Java and C++.
              </Text>
            </motion.div>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
