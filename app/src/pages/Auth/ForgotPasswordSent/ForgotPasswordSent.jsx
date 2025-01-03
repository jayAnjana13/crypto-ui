import { Box, Card, Center, Icon, Text, VStack } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

const ForgotPasswordSent = () => {
  const params = useParams();
  const { email } = useParams;
  return (
    <Center minH="100vh">
      <Card p={6} w="460px" borderRadius="1rem">
        <VStack spacing={6}>
          <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
          <Text textStyle="h4" fontWeight="medium" color="p.purple">
            Successfully Sent
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            We have sent instructions on how to reset your password to{" "}
            <Box as="b" color="p.black">
              {email}
            </Box>
            . Please follow the instructions from the email.
          </Text>
        </VStack>
      </Card>
    </Center>
  );
};

export default ForgotPasswordSent;
