import ClientShowcase from "../../../../components/common/ClientShowcase/ClientShowcase";

import client1 from "../../../../assets/logohriesnew.webp";
import client2 from "../../../../assets/logobeilpos.webp";
import client3 from "../../../../assets/logofunnevnew.webp";
import client4 from "../../../../assets/logofunnevnew.webp";
import client5 from "../../../../assets/logofunnevnew.webp";

const clients = [
  {
    id: 1,
    title: "AFFY WW",
    image: client1,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 2,
    title: "AFFY WW",
    image: client2,
    description:
      "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
  },
  {
    id: 3,
    title: "AFFY WW",
    image: client3,
    description:
      "A complete CRM solution to manage customers, automate workflows, and improve business productivity.",
  },
  {
    id: 4,
    title: "AFFY WW",
    image: client4,
    description:
      "Integrated enterprise management system for finance, HR, inventory, and operations management.",
  },
  {
    id: 5,
    title: "AFFY WW",
    image: client5,
    description:
      "Business intelligence dashboard with real-time analytics and advanced reporting capabilities.",
  },
];

// No bgImage prop → ClientShowcase falls back to bg-ink solid
// topGradient → smooth transition from ProductSection's dark bg image above
export default function ProductClient() {
  return (
    <ClientShowcase
      clients={clients}
      topGradient
      showCardBorder
      showOverlayGlow="left"
    />
  );
}
