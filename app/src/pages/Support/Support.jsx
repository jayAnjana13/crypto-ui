import { MdContactMail } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./component/ContactCard";
import SupportCard from "./component/SupportCard";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing={5}>
        <SupportCard
          leftcomponent={<ContactCard />}
          icon={MdContactMail}
          title="Contact Us"
          text="Have a Question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          leftcomponent={
            <InfoCard
              inverted={true}
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate,mortgage, and corporate account services"
              tagText="Contact"
            />
          }
          icon={RiMessage3Fill}
          title="Live Chat"
          text="Don't have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
