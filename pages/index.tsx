import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import useHomeStyles from "../modules/jss/home_styles";
import { Text, Box, Button, Flex, Link, theme } from "@chakra-ui/react";
import Carousel from "../modules/home/Carousel";

const Home: NextPage = () => {
  const styles = useHomeStyles();

  return (
    <div data-testid="home-page" className={styles.page}>
      <Head>
        <title>Personal Portfolio - Remy Papillon</title>
        <meta
          name="description"
          content="Hi! My name is Remy Papillon, and I am an aspiring web developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <section>
          <Flex
            height="100vh"
            flexDirection={["column", "column", "row", "row"]}
            mb={[20, 20, 0, 0]}
            padding={5}
            alignItems="center"
          >
            <Box
              order={[2, 2, 1, 1]}
              width={["100%", "100%", "50%", "50%"]}
              color="white"
              margin="auto"
              zIndex={3}
            >
              <Text fontSize={["2xl", "3xl", "5xl", "7xl"]}>
                Hi! I&apos;m Remy!
              </Text>
              <Text fontSize={["xl", "xl", "4xl"]} mb={5}>
                Aspiring Front-End Developer
              </Text>
              <Text maxWidth="640px" fontWeight="thin" lineHeight={2.0}>
                Student by day, hobbyist developer by night. I am a self-taught
                web developer with a passion for learning and problem solving.
              </Text>
              <Button mt={4} colorScheme="blue">
                Contact Me!
              </Button>
            </Box>

            <Box order={[1, 1, 2, 2]}>
              <Image
                style={{ borderRadius: "2em" }}
                width={700}
                height={700}
                src="/Happy Bunch - Remy - Desk.svg"
              />
            </Box>
          </Flex>
        </section>

        <Flex
          gap={4}
          paddingX={3}
          paddingY={10}
          height="100%"
          justifyContent="space-between"
          alignItems="center"
          color="white"
          flexDirection={["column", "column", "row", "row"]}
        >
          <Text
            display={["block", "block", "none", "none"]}
            fontSize="6xl"
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
          <Box width={["100%", "100%", "50%", "50%"]}>
            <Text
              display={["none", "none", "block", "block"]}
              fontSize="6xl"
              mb={2}
            >
              Technologies
            </Text>
            <Text
              fontWeight="thin"
              width={["100%", "100%", "50%", "50%"]}
              lineHeight={2.0}
            >
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
          color="white"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column", "column", "row", "row"]}
        >
          <Text
            display={["block", "block", "none", "none"]}
            fontSize="6xl"
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
          <Box width={["100%", "100%", "50%", "50%"]}>
            <Text
              display={["none", "none", "block", "block"]}
              fontSize="6xl"
              mb={2}
            >
              Languages
            </Text>
            <Text
              fontWeight="thin"
              width={["100%", "100%", "50%", "50%"]}
              lineHeight={2.0}
            >
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
      </main>

      <Flex
        as="footer"
        paddingY={2}
        fontWeight="light"
        backgroundColor="whiteAlpha.500"
        flexDirection="column"
        alignItems="center"
        color="white"
      >
        <Text>Remsfield Papillon, 2022</Text>
        <Text>
          Images by Pablo Stanley, courtesy of{" "}
          {
            <NextLink href="https://blush.design/" passHref>
              <Link
                _hover={{
                  color: theme.colors.blackAlpha[900],
                  textDecoration: "underline",
                }}
              >
                Blush Designs
              </Link>
            </NextLink>
          }
        </Text>
      </Flex>
    </div>
  );
};

export default Home;
