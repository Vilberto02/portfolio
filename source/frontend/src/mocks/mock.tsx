import Vitamia from "@/assets/vitamia.png";
import Bioloop from "@/assets/bioloop.png";
import Dumpster from "@/assets/dumpster-rental.png";
import { StaticImageData } from "next/image";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  url: string;
  image: StaticImageData;
  tags: string[];
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Vitamia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim.",
    url: "https://vitamia-demo-five.vercel.app/",
    image: Vitamia,
    tags: ["Desarrollo web"],
  },
  {
    id: 2,
    title: "Bioloop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim.",
    url: "https://mistock-demo-five.vercel.app/",
    image: Bioloop,
    tags: ["Prototipo"],
  },
  {
    id: 3,
    title: "Dumpster Rentail",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim. Donec vel risus enim.",
    url: "https://ezcommerce-demo-five.vercel.app/",
    image: Dumpster,
    tags: ["Desarrollo web", "Prototipo"],
  },
];
