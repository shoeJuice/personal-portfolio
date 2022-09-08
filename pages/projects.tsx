import React, { useState, useEffect } from "react";
import axios from "axios";
import type { NextPage, GetServerSidePropsContext } from "next";
import { Box, Flex, Text, Button, Container } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

import ProjectCard from "../modules/projects/ProjectCard";

const Projects: NextPage = ({ data }: any) => {
  return (
    <Container paddingY={4}>
      <Text fontSize="4xl" textAlign="center" mt={10}>
        Projects
      </Text>
      {data.map((project: any, key: number) => (
        <motion.div
          key={key}
          animate={{
            opacity: [0, 1],
            transition: { ease: "linear", delay: (key / 10) },
          }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </Container>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { data } = await axios.get("/api/projects", {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  return {
    props: { data },
  };
};
export default Projects;
