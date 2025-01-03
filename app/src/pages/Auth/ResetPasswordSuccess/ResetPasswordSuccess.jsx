import React from "react";
import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsPatchCheckFill } from "react-icons/bs";

const ResetPasswordSuccess = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p={6} w="460px" borderRadius="1rem">
          <VStack spacing={6}>
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text textStyle="h4" fontWeight="medium" color="p.purple">
              Password Resent Done
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Now you can access your account.
            </Text>
            <Box w="full">
              <Link to="/signin">
                <Button w="full">Signin</Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPasswordSuccess;
