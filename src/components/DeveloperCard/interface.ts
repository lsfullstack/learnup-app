import { StaticImageData } from "next/image";

export interface IDeveloperCardProps {
  img: StaticImageData;
  name: string;
  occupation: string;
  linkedin: string;
  github: string;
}
