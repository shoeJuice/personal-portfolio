import React, { useRef } from "react";
import axios from "axios";
import {
  HStack,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

/**
 * Contact form component
 */
const ContactForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    let submitData = {
      "First Name": firstNameRef.current?.value,
      "Last Name": lastNameRef.current?.value,
      "Email Address": emailRef.current?.value,
      Message: messageRef.current?.value,
      createdAt: new Date().toISOString(),
    };
    if (
      !firstNameRef.current?.value ||
      !lastNameRef.current?.value ||
      !emailRef.current?.value ||
      !messageRef.current?.value
    ) {
      alert("Please fill out all fields");
      return;
    }
    axios
      .post("/api/contact", submitData, {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      })
      .then(() => {
        console.log("Data submitted, view in console");
      });
  };
  return (
    <Flex
      flexDirection="column"
      borderRadius={4}
      color={useColorModeValue("gray.900", "whiteAlpha.900")}
      mt={4}
      padding={4}
      backgroundColor={useColorModeValue("purple.200", "purple.600")}
      gap={2}
      data-testid="contact-form"
      boxShadow="lg"
    >
      <HStack>
        <Box>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              ref={firstNameRef}
              type="text"
              _placeholder={{
                color: useColorModeValue("purple.700", "whiteAlpha.900"),
              }}
              placeholder="First Name"
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              ref={lastNameRef}
              type="text"
              _placeholder={{
                color: useColorModeValue("purple.700", "whiteAlpha.900"),
              }}
              placeholder="Last Name"
            />
          </FormControl>
        </Box>
      </HStack>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          ref={emailRef}
          _placeholder={{
            color: useColorModeValue("purple.700", "whiteAlpha.900"),
          }}
          placeholder="Email"
          type="email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea
          ref={messageRef}
          _placeholder={{
            color: useColorModeValue("purple.700", "whiteAlpha.900"),
          }}
          placeholder="Message"
        />
      </FormControl>
      <Button onClick={handleSubmit} disabled={(!firstNameRef.current?.value || !lastNameRef.current?.value || !emailRef.current?.value || !messageRef.current?.value)} colorScheme="purple" width="40%">
        Send
      </Button>
    </Flex>
  );
};

export default ContactForm;
