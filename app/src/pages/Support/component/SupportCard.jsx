import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftcomponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        lg: "row",
      }}
    >
      <Stack maxW="360px">
        <Icon as={icon} boxSize={6} color="p.purple" />
        <Text as="h1" fontWeight="medium" textStyle="h1">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box w="full" maxW="560px">
        {leftcomponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
