import React from "react";
import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { object, string, ref } from "yup";
import { verfiyForgotToken } from "../../../api/query/userQuery";

const resetValidationSchema = object({
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat password is required"),
});

const ResetPassword = () => {
  const toast = useToast();
  const { token } = useParams();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["verfiy-forgot-token"],
    mutationFn: verfiyForgotToken,
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: "error",
      });
      navigate("/signup");
    },
    onSettled: () => {
      navigate("/reset-success");
    },
  });

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <Center minH="100vh">
      <Card p={6} w="460px" borderRadius="1rem">
        <Text mt={4} textStyle="h1" fontWeight="medium">
          Reset Password
        </Text>
        <Text textStyle="p2" color="black.60" mt="4">
          Enter your password.
        </Text>
        <Formik
          initialValues={{
            password: "",
            repeatPassword: "",
          }}
          onSubmit={(values) => {
            mutate({ token, password: values.password });
          }}
          validationSchema={resetValidationSchema}
        >
          {() => (
            <Form>
              <Stack mt={10} spacing={6}>
                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="password">New Password</FormLabel>
                      <Input
                        {...field}
                        name="password"
                        type="password"
                        placeholder="Enter password.."
                      />
                      <FormErrorMessage>{meta.error} </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="repeatPassword">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="repeatPassword">
                        Repeat New Password
                      </FormLabel>
                      <Input
                        {...field}
                        name="repeatPassword"
                        type="password"
                        placeholder=" Repeat Password.."
                      />
                      <FormErrorMessage>{meta.error} </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Box>
                  <Button type="submit" w="full">
                    Reset Password
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Center>
  );
};

export default ResetPassword;
