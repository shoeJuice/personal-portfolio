import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

import {
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import ContactForm from "../modules/forms/ContactForm";
import { useMemo, useState } from "react";

const Contact: NextPage = () => {
  const [formSent, handleFormSent] = useState<boolean>(false);
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();

  const renderSuccessMessage = () => {
    return (
      <Flex
        flexDirection="column"
        borderRadius={4}
        color={colorMode == "light" ? "gray.900" : "whiteAlpha.900"}
        mt={4}
        padding={4}
        backgroundColor={colorMode == "light" ? "purple.200" : "purple.600"}
        gap={2}
        data-testid="contact-form-success"
        boxShadow="lg"
      >
        <Text as="h2" fontSize="2xl">
          Thank You!
        </Text>
        <Text mt={4}>
          Thank you for leaving a message! I will respond promptly!
        </Text>
      </Flex>
    );
  };

  return (
    <Container height="100vh" paddingY={4} data-testid="contact-page">
      <Head>
        <title>Contact - Remy Papillon</title>
        <meta
          name="description"
          content="Feel free to reach out to me with any questions or concerns."
        />
        <link rel="icon" href="/Avatars-Remy-Alternate.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        exit={{ opacity: 0 }}
      >
        <Text as="h2" fontSize="6xl">
          Leave a Message!
        </Text>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        exit={{ opacity: 0 }}
      >
        Feel free to leave a message! I will get back to you as soon as I can.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        exit={{ opacity: 0, y: 50 }}
      >
        {formSent ? (
          renderSuccessMessage()
        ) : (
          <ContactForm handleFormSent={handleFormSent} />
        )}
      </motion.div>
    </Container>
  );
};

export default Contact;
