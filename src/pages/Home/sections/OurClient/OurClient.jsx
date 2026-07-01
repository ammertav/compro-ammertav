import ClientShowcase from "../../../../components/common/ClientShowcase/ClientShowcase";

import client1 from "../../../../assets/logohriesnew.webp";
import client2 from "../../../../assets/logobeilpos.webp";
import client3 from "../../../../assets/logofunnevnew.webp";
import client4 from "../../../../assets/logofunnevnew.webp";
import client5 from "../../../../assets/logofunnevnew.webp";

const clients = [
  {
    id: 1,
    title: "Siti Rahmawati",
    image: client1,
    description:
      "“Since switching to Hries, payroll and attendance run on their own. What used to take our HR team days now takes minutes.” — HR Manager, PT Sinar Abadi",
  },
  {
    id: 2,
    title: "Andika Pratama",
    image: client2,
    description:
      "“BePOS made running our three outlets effortless. Real-time sales from every branch in a single dashboard.” — Owner, Kopi Nusantara",
  },
  {
    id: 3,
    title: "Budi Santoso",
    image: client3,
    description:
      "“Tivro keeps our whole team aligned. I can see every project’s progress in real time and nothing slips through.” — Project Lead, Digital Kreasi",
  },
  {
    id: 4,
    title: "Dewi Lestari",
    image: client4,
    description:
      "“They understood our business from day one and delivered a website that actually brings in customers.” — Founder, Batik Larasati",
  },
  {
    id: 5,
    title: "Rizky Hidayat",
    image: client5,
    description:
      "“Professional, responsive, and always on time. Their system integration streamlined our entire workflow.” — Operations Director, Maju Logistik",
  },
];

export default function OurClient() {
  return <ClientShowcase clients={clients} />;
}
