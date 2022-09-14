import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./nav/Navbar";
import Footer from "./Footer";

/**
 * Main Layout component wrapping page content
 */
const MainLayout = ({ children }: any) => {

  return (
    <Box
      color={useColorModeValue("gray.900", "whiteAlpha.900")}
      data-testid="main-layout"
      width="100%"
    >
      <Navbar />
      <Box
        maxW="100%"
        height="100%"
        position="relative"
        data-testid="main-container"
        zIndex={1}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
