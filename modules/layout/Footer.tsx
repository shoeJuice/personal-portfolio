import {
  Flex,
  Text,
  useColorModeValue,
  HStack,
  Link,
  theme,
} from "@chakra-ui/react";
import NextLink from "next/link";

/**
 * Render a footer component
 */
const Footer = () => {
  return (
    <Flex
      as="footer"
      paddingY={2}
      fontWeight="light"
      backgroundColor={useColorModeValue("purple.100", "purple.900")}
      flexDirection="column"
      alignItems="center"
      position="relative"
    >
      <Text>Remsfield Papillon, 2022</Text>
      <Text fontSize="sm">
        Splash Image by{" "}
        {
          <NextLink
            href="https://blush.design/artists/RyUTVuP8G4QeAAEEQgug/pablo-stanley"
            passHref
          >
            <Link
              _hover={{
                color: useColorModeValue(
                  theme.colors.blackAlpha[900],
                  theme.colors.whiteAlpha[900]
                ),
                textDecoration: "underline",
              }}
            >
              Pablo Stanley
            </Link>
          </NextLink>
        }, courtesy of{" "}
        {
          <NextLink href="https://blush.design/" passHref>
            <Link
              _hover={{
                color: useColorModeValue(
                  theme.colors.blackAlpha[900],
                  theme.colors.whiteAlpha[900]
                ),
                textDecoration: "underline",
              }}
            >
              Blush Designs
            </Link>
          </NextLink>
        }
      </Text>
      <Text fontSize="sm">
        Tab Icon by{" "}
        {
          <NextLink
            href="https://blush.design/artists/RyUTVuP8G4QeAAEEQgug/pablo-stanley"
            passHref
          >
            <Link
              _hover={{
                color: useColorModeValue(
                  theme.colors.blackAlpha[900],
                  theme.colors.whiteAlpha[900]
                ),
                textDecoration: "underline",
              }}
            >
              Pablo Stanley
            </Link>
          </NextLink>
        }
        , courtesy of{" "}
        {
          <NextLink href="https://blush.design/" passHref>
            <Link
              _hover={{
                color: useColorModeValue(
                  theme.colors.blackAlpha[900],
                  theme.colors.whiteAlpha[900]
                ),
                textDecoration: "underline",
              }}
            >
              Blush Designs
            </Link>
          </NextLink>
        }
      </Text>
      <Text fontSize="sm">
        Logos courtesy of{" "}
        {
          <NextLink href="https://iconape.com/" passHref>
            <Link
              _hover={{
                color: useColorModeValue(
                  theme.colors.blackAlpha[900],
                  theme.colors.whiteAlpha[900]
                ),
                textDecoration: "underline",
              }}
            >
              Iconape
            </Link>
          </NextLink>
        }
      </Text>
      <Text fontSize="sm">
        Icons by{" "}
        {
          <NextLink href="https://icons8.com/" passHref>
            <Link
              _hover={{
                color: useColorModeValue(
                  theme.colors.blackAlpha[900],
                  theme.colors.whiteAlpha[900]
                ),
                textDecoration: "underline",
              }}
            >
              Icons8
            </Link>
          </NextLink>
        }
      </Text>

      <HStack fontSize="xs">
        {/*https://icons8.com/icon/uJM6fQYqDaZK/typescript*/}
        {/*https://icons8.com/icon/108784/javascript*/}
        <NextLink href="https://icons8.com/icon/108784/javascript" passHref>
          <Link
            _hover={{
              color: useColorModeValue(
                theme.colors.blackAlpha[900],
                theme.colors.whiteAlpha[900]
              ),
              textDecoration: "underline",
            }}
          >
            JavaScript Icon
          </Link>
        </NextLink>
        <NextLink
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
          passHref
        >
          <Link
            _hover={{
              color: useColorModeValue(
                theme.colors.blackAlpha[900],
                theme.colors.whiteAlpha[900]
              ),
              textDecoration: "underline",
            }}
          >
            TypeScript Icon
          </Link>
        </NextLink>
      </HStack>
    </Flex>
  );
};

export default Footer;
