import React, { useState, useEffect } from "react";
import axios from "axios";
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";
import { Box, Flex, Text, Button, Container } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

import ProjectCard from "../modules/projects/ProjectCard";

const Projects: NextPage = ({ data }: any) => {
  return (
    <Container paddingY={4}>
        <Head>
            <title>Projects - Remy Papillon</title>
            <meta name="description" content="A list of projects I have worked on." />
            <link rel="icon" href="/Avatars-Remy-Alternate.ico" />
        </Head>
      <Text fontSize="4xl" textAlign="center" mt={10}>
        Projects
      </Text>
      {data.map((project: any, key: number) => (
        <motion.div
          key={key}
          animate={{
            opacity: [0, 1],
            transition: { ease: "linear", delay: key / 10 },
          }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </Container>
  );
};



export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  try {
    const { data } = await axios.get("/api/projects", {
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return {
      props: { data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default Projects;
