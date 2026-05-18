import FAQSection from "../Home/sections/FAQ/FAQSection";
import ServiceSection from "./sections/ServiceSec/ServiceSection";
import ServiceWorks from "./sections/ServiceWork/ServiceWorks";
import ServiceClient from "./sections/ServiceClient/ServiceClient";

export default function Service() {
  return (
    <>
      <ServiceSection />
      <ServiceWorks />
      <ServiceClient />
      <FAQSection />
    </>
  );
}
