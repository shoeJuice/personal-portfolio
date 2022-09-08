import type { NextPage } from "next";
import Head from "next/head";

import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import ContactForm from "../modules/forms/ContactForm";

const Contact: NextPage = () => {
  return (
    <Container height="100vh" paddingY={4} data-testid="contact-page">
      <Text as="h2" fontSize="4xl">Leave a Message!</Text>
      <p>
        Feel free to leave a message! I will get back to you as soon as I can.
      </p>
      <ContactForm />
    </Container>
  );
};

export default Contact;
