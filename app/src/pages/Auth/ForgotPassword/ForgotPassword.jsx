import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";
import { object, string } from "yup";
import { sendForgotMail } from "../../../api/query/userQuery";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import { Card } from "../../../components/Card";

const ForgotPassword = () => {
  const forgotValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
  });
  const [email, setEmail] = useState("");

  const toast = useToast();
  const navigate = useNavigate();
  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotMail,
    onSuccess: (data) => {
      console.log(data);
      navigate(`/forgot-success/${email}`);
    },
    onError: (error) => {
      toast({
        title: "Forgot Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  return (
    <Center minH="100vh">
      <Card p={6} w="460px" borderRadius="1rem">
        <Link to="/signin">
          <Icon as={IoMdArrowRoundBack} boxSize={6} />
        </Link>
        <Text mt={4} textStyle="h1" fontWeight="medium">
          Forgot Password
        </Text>
        <Text textStyle="p2" color="black.60" mt="4">
          Enter your email address for which account you want to reset your
          password.
        </Text>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            setEmail((prev) => (prev = values.email));
            mutate({ email: values.email });
          }}
          validationSchema={forgotValidationSchema}
        >
          {() => (
            <Form>
              <Stack mt={10} spacing={6}>
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        name="email"
                        type="email"
                        placeholder="Enter email.."
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

export default ForgotPassword;
