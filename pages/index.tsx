import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useHomeStyles from "../modules/jss/home_styles";
import { Text, Box, Button, Flex, Link } from "@chakra-ui/react";
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
        <section className={styles.splash}>
          <Box width="100%" color="white" paddingY={2}>
            <Text fontSize="4xl">Remy Papillon</Text>
            <Text fontSize="2xl" mb={5}>
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
          
          <Image style={{borderRadius: "2em"}} layout="fixed" width={1100} height={500} src="/selfPortrait2.jpg" />
        </section>

        <section>
          <Flex gap={4} height="100%" width="100%" color="white">
            <Carousel
              reverse
              images={[
                "/Jest-logo.svg",
                "/Nextjs-logo.svg",
                "/React-icon.svg",
                "/storybook-logo.svg",
              ]}
            />
            <Box width="50%">
              <Text fontSize="3xl">Technologies</Text>
              <Text fontWeight="thin" lineHeight={2.0}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                quae quia nisi odio animi perferendis ex odit aperiam atque, ab
                fuga corporis! Soluta, fugiat molestias! Nobis laudantium cumque
                obcaecati odit.
              </Text>
            </Box>
          </Flex>
        </section>

        <section>
          <Flex
            gap={4}
            justifyContent="space-between"
            height="100%"
            width="100%"
            color="white"
          >
            <Box width="50%">
              <Text fontSize="3xl">Languages</Text>
              <Text fontWeight="thin" lineHeight={2.0}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                quae quia nisi odio animi perferendis ex odit aperiam atque, ab
                fuga corporis! Soluta, fugiat molestias! Nobis laudantium cumque
                obcaecati odit.
                {<br />}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                perferendis omnis nostrum hic, a deleniti consectetur eos optio
                eligendi molestiae id et voluptatum voluptate deserunt autem
                expedita, dolorem facilis repellendus!
              </Text>
            </Box>
            <Carousel
              images={[
                "/Jest-logo.svg",
                "/Nextjs-logo.svg",
                "/React-icon.svg",
                "/storybook-logo.svg",
              ]}
            />
          </Flex>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
