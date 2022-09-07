import type { NextPage } from "next";
import { Box, Flex, Text, Button, Container } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

import ProjectCard from "../modules/projects/ProjectCard";

const Projects: NextPage = () => {
  return (
    <Container paddingY={4}>
      <Text fontSize="4xl" textAlign="center" mt={10}>
        Projects
      </Text>
      <ProjectCard
        title="Test Project"
        image={"/firebase-chat-app-main-alt.svg"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Augue interdum velit euismod in pellentesque. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Ligula ullamcorper malesuada proin libero nunc consequat interdum."
        }
        technologies={["React", "Next.js", "Chakra UI"]}
        languages={["TypeScript", "JavaScript", "HTML", "CSS"]}
      />

      <ProjectCard
        title="Test Project"
        image={"/firebase-chat-app-main-alt.svg"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Augue interdum velit euismod in pellentesque. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Ligula ullamcorper malesuada proin libero nunc consequat interdum."
        }
        technologies={["React", "Next.js", "Chakra UI"]}
        languages={["TypeScript", "JavaScript", "HTML", "CSS"]}
      />

      <ProjectCard
        title="Test Project"
        image={"/firebase-chat-app-main-alt.svg"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Augue interdum velit euismod in pellentesque. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Ligula ullamcorper malesuada proin libero nunc consequat interdum."
        }
        technologies={["React", "Next.js", "Chakra UI"]}
        languages={["TypeScript", "JavaScript", "HTML", "CSS"]}
      />
    </Container>
  );
};

export default Projects;
