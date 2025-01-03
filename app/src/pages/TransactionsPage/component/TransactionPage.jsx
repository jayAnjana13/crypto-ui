import {
  Button,
  Card,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../../components/DashboardLayout";
import { CiExport } from "react-icons/ci";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "../TransactionTable";
import { CiSearch } from "react-icons/ci";

const TransactionPage = () => {
  const tabs = [
    { name: "All", count: 349 },
    { name: "Deposit", count: 114 },
    { name: "Withdraw", count: 55 },
    { name: "Trade", count: 22 },
  ];
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb={3}>
        <Button leftIcon={<Icon as={CiExport} />}>Export CSV</Button>
      </Flex>

      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt={2}
            display="flex"
            justifyContent="space-between"
            w="full"
          >
            {tabs.map((tab) => (
              <Tab key={tab.name} display="flex" gap={2} pb={4}>
                {tab.name}
                <Tag colorScheme="gray" borderRadius="full">
                  {tab.count}
                </Tag>
              </Tab>
            ))}

            <InputGroup maxW="200px" pr={6}>
              <InputLeftElement pointerEvents="none">
                <Icon as={CiSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search.." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
