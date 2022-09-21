import axios from "axios";
import type { NextPage, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { Text, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

import ProjectCard from "../modules/projects/ProjectCard";

const Projects: NextPage = ({ data }: any) => {
  return (
    <Container paddingY={4}>
      <Head>
        <title>Projects - Remy Papillon</title>
        <meta
          name="description"
          content="A list of projects I have worked on."
        />
        <link rel="icon" href="/Avatars-Remy-Alternate.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { ease: "easeIn", duration: 0.5 },
        }}
        exit={{ opacity: 0 }}
      >
        <Text fontSize="6xl" textAlign="center" mt={10}>
          Projects
        </Text>
      </motion.div>
      {data.map((project: any, key: number) => (
        <motion.div
          key={key}
          animate={{
            opacity: [0, 1],
            transition: { ease: "linear", delay: key / 10 },
          }}
          exit={{ opacity: 0 }}
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
    console.error(error);
    console.log("Base URL: ", process.env.NEXT_PUBLIC_BASE_URL);
    return {
      notFound: true,
    };
  }
};
export default Projects;
