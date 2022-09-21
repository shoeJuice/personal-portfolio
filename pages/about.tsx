import React, { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";

import { motion } from "framer-motion";

import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const AboutMe: NextPage = () => {
  return (
    <div data-testid="about-page" style={{ overflowX: "hidden" }}>
      <Head>
        <title>About Me - Remy Papillon</title>
        <meta name="description" content="About Me - Remy Papillon" />
        <link rel="icon" href="/Avatars-Remy-Alternate.ico" />
      </Head>
      <Flex
        height={"100vh"}
        as="main"
        width="container.xl"
        marginX="auto"
        padding={10}
        justifyContent="space-between"
      >
        <Flex as="section" width="100%" gap={3} justifyContent="space-between">
          <Box width="50%">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <Text paddingY={2} fontSize="6xl" fontWeight="semibold">
                About Me
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <Text fontSize="lg" fontWeight="light" lineHeight="8">
                Hi! My name is Remy Papillon, and I am currently a senior
                enrolled at Fairfield University pursuing a degree in Computer
                Science. I&apos;m originally from Brooklyn, New York and
                I&apos;m currently living in Trumbull, Connecticut.
              </Text>
              <Text mt={2} fontSize="lg" fontWeight="light" lineHeight="8">
                I&apos;ve been writing React projects for 2 years now, and
                I&apos;ve held numerous internships stretching back to high
                school. 
              </Text>
              <Text mt={2} fontSize="lg" fontWeight="light" lineHeight="8">
                In my free time, I enjoy playing computer games and exercising.
                I also thorougly enjoy reading manga and watching anime. My
                favorite manga is One Piece, my favorite anime being Karate
                Shoukoushi Kohinata Minoru.
              </Text>
            </motion.div>
          </Box>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            exit={{ opacity: 0, x: "100%" }}
          >
            <Image
              data-testid="self-portrait"
              borderRadius={8}
              src="/selfPortrait2.jpg"
              width="400px"
              height="400px"
              position="relative"
            />
          </motion.div>
        </Flex>
      </Flex>
    </div>
  );
};

export default AboutMe;
