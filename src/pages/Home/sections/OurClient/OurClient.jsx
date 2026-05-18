import ClientShowcase from "../../../../components/common/ClientShowcase/ClientShowcase";

import client1 from "../../../../assets/logohriesnew.png";
import client2 from "../../../../assets/logobeilpos.png";
import client3 from "../../../../assets/logofunnevnew.webp";
import client4 from "../../../../assets/logofunnevnew.webp";
import client5 from "../../../../assets/logofunnevnew.webp";
import bgImage from "../../../../assets/ourclientBG.webp";

const clients = [
  {
    id: 1,
    title: "Hries",
    image: client1,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 2,
    title: "BePOS",
    image: client2,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 3,
    title: "CRM System",
    image: client3,
    description:
      "A complete CRM solution to manage customers, automate workflows, and improve business productivity.",
  },
  {
    id: 4,
    title: "ERP Solution",
    image: client4,
    description:
      "Integrated enterprise management system for finance, HR, inventory, and operations management.",
  },
  {
    id: 5,
    title: "Smart Analytics",
    image: client5,
    description:
      "Business intelligence dashboard with real-time analytics and advanced reporting capabilities.",
  },
];

export default function OurClient() {
  return <ClientShowcase clients={clients} bgImage={bgImage} />;
}
