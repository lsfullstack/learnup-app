"use client";

import LearnUpProvider from "@/context";

import { Inter, Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import checkIsPublicRoute from "@/functions/check-is-public-route";
import PrivateRoute from "@/components/PrivateRoute";
import Image from "next/image";
import bgImage from "../../../public/images/bg-image.jpg";
import HomeTextDiv from "@/components/HomeTextDiv";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: 'LearnUp',
// }

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPublicPage = checkIsPublicRoute(pathname);

  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <main className="flex h-screen">
          <div className="relative left-0 hidden h-screen w-[50%] xl:w-[85%] lg:block">
            <Image
              src={bgImage}
              alt="bg-image"
              className="object-rigth  h-screen object-cover"
            />
            <HomeTextDiv />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
