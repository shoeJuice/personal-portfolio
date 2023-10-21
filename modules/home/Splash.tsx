/**
 * @fileoverview The Splash component for the main Home Page
 */
import HomeTextConsts from "./textConsts";
import { Text, Button, HStack, IconButton, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  motion,
  useInView,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";

function renderSplashText() {
  return (
    <>
      <Text fontSize={["5xl", "3xl", "6xl", "7xl"]}>{HomeTextConsts.intro}</Text>
      <Text fontSize={["xl", "xl", "4xl"]} mb={5}>
        {HomeTextConsts.title}
      </Text>
      <Text maxWidth="640px" fontWeight="thin" lineHeight={"9"}>
        {HomeTextConsts.description}
      </Text>
    </>
  );
}

function renderContactLink() {
  return (
    <NextLink href="/contact" passHref>
      <Button mt={4} colorScheme="purple">
        {HomeTextConsts.contactMe}
      </Button>
    </NextLink>
  );
}

function renderSocialMedia() {
  return (
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
  );
}

function renderSplash(): JSX.Element {
  return (
    <motion.div
      key="splashText"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1],
        transition: {
          delay: 0.5,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.5,
        },
      }}
    >
      {renderSplashText()}
      {renderContactLink()}
      {renderSocialMedia()}
    </motion.div>
  );
}

const Splash = () => {
  return (
    <Box
      order={[2, 2, 1, 1]}
      width={["100%", "100%", "50%", "50%"]}
      margin="auto"
    >
      {renderSplash()}
    </Box>
  );
};

export default Splash;