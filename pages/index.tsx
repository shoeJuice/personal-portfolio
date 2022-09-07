import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import useHomeStyles from "../modules/jss/home_styles";
import { Text, Box, Button, Flex, Link, theme, useColorModeValue, HStack } from "@chakra-ui/react";
import Carousel from "../modules/home/Carousel";

const Home: NextPage = () => {
  const styles = useHomeStyles();

  return (
    <div data-testid="home-page">
      <Head>
        <title>Personal Portfolio - Remy Papillon</title>
        <meta
          name="description"
          content="Hi! My name is Remy Papillon, and I am an aspiring web developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
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
            zIndex={3}
          >
            <Text fontSize={["5xl", "3xl", "5xl", "7xl"]}>
              Hi! I&apos;m Remy!
            </Text>
            <Text fontSize={["xl", "xl", "4xl"]} mb={5}>
              Aspiring Front-End Developer
            </Text>
            <Text maxWidth="640px" fontWeight="thin" lineHeight={2.0}>
              Student by day, hobbyist developer by night. I am a self-taught
              web developer with a passion for learning and problem solving.
            </Text>
            <Button mt={4} colorScheme="purple">
              Contact Me!
            </Button>
          </Box>

          <Box
            order={[1, 1, 2, 2]}
            width={["100%", "100%", "50%"]}
            height="90%"
            position="relative"
          >
            <Image
              style={{ borderRadius: "2em" }}
              layout="fill"
              src="/Happy Bunch - Remy - Desk.svg"
            />
          </Box>
        </Flex>

        <Flex
          gap={4}
          paddingX={3}
          paddingY={10}
          height="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column", "column", "row", "row"]}
        >
          <Text
            display={["block", "block", "none", "none"]}
            fontSize="5xl"
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
            ]}
          />
          <Box width={["100%", "100%", "50%", "50%"]} padding={10}>
            <Text
              display={["none", "none", "block", "block"]}
              fontSize="5xl"
              mb={2}
            >
              Technologies
            </Text>
            <Text fontWeight="thin" maxWidth="640px" lineHeight={2.0}>
              The projects I&apos;ve worked on have given me the opportunity to
              learn a wide variety of technologies. My stack relies heavily on
              React and NextJS, and many of my front-end projects use ChakraUI
              for styling. Other libraries and frameworks I have used include
              Redux, Jest, Storybook, and Framer-Motion among many others and I
              am always looking to learn more.
            </Text>
          </Box>
        </Flex>

        <Flex
          gap={4}
          paddingX={3}
          paddingY={10}
          height="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column", "column", "row", "row"]}
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
              "/Jest-logo.svg",
              "/Nextjs-logo.svg",
              "/React-icon.svg",
              "/storybook-logo.svg",
            ]}
          />
          <Box width={["100%", "100%", "50%", "50%"]} padding={10}>
            <Text
              display={["none", "none", "block", "block"]}
              fontSize="5xl"
              mb={2}
            >
              Languages
            </Text>
            <Text fontWeight="thin" maxWidth="640px" lineHeight={2.0}>
              I have a strong background in Python, where it has been used as a
              primary language of instruction in my university courses. I have
              used Python in tandem with React to build one of my first
              full-stack projects. While Python is one of my strongest
              languages, I otherwise have a strong understanding of Javascript
              and Typescript. Other languages I have experience with include
              Java and C++.
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
