import {
  Box,
  Button,
  Card,
  Checkbox,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p={4} borderRadius="1rem" flexGrow={1}>
      <Stack spacing={3}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter your Name.." />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input type="text" placeholder="Enter your Surname.." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email.." />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea type="text" placeholder="Your Messsage.." />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize="xs">
            I agree with
            <Box as="span" color="p.purple">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
