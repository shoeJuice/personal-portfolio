import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const [formDisabled, setFormDisabled] = useState<boolean>(true);

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

   const checkFormValidity = () => {
    const anyFieldEmpty =
      firstNameRef.current?.value.trim() === '' ||
      lastNameRef.current?.value.trim() === '' ||
      emailRef.current?.value.trim() === '' ||
      messageRef.current?.value.trim() === '';

    // Set formDisabled to true if any field is empty, false if all are populated
    setFormDisabled(anyFieldEmpty);
  };

  const handleInputChange = useCallback(() => {
    checkFormValidity();
  }, []);

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
              onChange={checkFormValidity}
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
              onChange={checkFormValidity}
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
          onChange={checkFormValidity}
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
          onChange={checkFormValidity}
        />
      </FormControl>
      <Button onClick={handleSubmit} disabled={formDisabled} colorScheme="purple" width="40%">
        Send
      </Button>
    </Flex>
  );
};

export default ContactForm;
