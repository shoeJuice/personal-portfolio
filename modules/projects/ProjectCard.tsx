import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Button, HStack, Image, useColorModeValue } from "@chakra-ui/react";

import NextImage from "next/image";
import NextLink from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  repo?: string;
  demo?: string;
  technologies: string[];
  languages: string[];
};

/**
 * Render a project card displaying the project,
 * an image of said project, a description of the project,
 * with a link to the project's page and repository.
 */
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Flex
      maxWidth="645px"
      backgroundColor={useColorModeValue("purple.200", "whiteAlpha.400")}
      data-testid="project-card"
      mt={5}
      borderTopRadius={0}
      borderBottomRadius={4}
      flexDirection="column"
      alignItems="center"
    >
      <Box width="100%" height="35%" backgroundColor="whiteAlpha.900">
        {props.image && <Image src={props.image} width="100%" height="100%" />}
      </Box>

      <Box padding={4}>
        <Text fontSize="2xl" mb={5}>
          {props.title}
        </Text>
        <Text fontSize="lg" fontWeight="medium" mb={2}>
          Technologies
        </Text>
        <HStack mb={5}>
          {props.technologies.map((technology, key) => (
            <Text key={key}>{"\u2022" + " " + technology}</Text>
          ))}
        </HStack>
        <Text fontSize="lg" fontWeight="medium" mb={2}>
          Languages
        </Text>
        <HStack mb={5}>
          {props.languages.map((language, key) => (
            <Text key={key}>{"\u2022" + " " + language}</Text>
          ))}
        </HStack>
        <Text fontSize="lg" fontWeight="medium" mb={2}>
          Description
        </Text>
        <Text maxWidth="450px">{props.description}</Text>
        <HStack mt={5}>
          {props.repo && (
            <NextLink href={props.repo} passHref>
              <Button colorScheme="purple">Github</Button>
            </NextLink>
          )}
          {props.demo && (
            <NextLink href={props.demo} passHref>
              <Button colorScheme="purple">Live Demo</Button>
            </NextLink>
          )}
        </HStack>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
