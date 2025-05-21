import logo from "@/assets/Cassive.png";
import Image from "next/image";
import { Poetsen_One, Fleur_De_Leah } from "next/font/google";

const poetsen = Poetsen_One({ weight: "400", subsets: ["latin"] });
const fleur = Fleur_De_Leah({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <main className="to-teal relative grid w-screen grid-rows-[auto_1fr] rounded-b-full bg-gradient-to-b from-transparent from-75% px-5 pb-24">
      <header className="flex h-fit w-full items-center justify-center">
        <Image src={logo.src} width={96} height={96} alt="Cassive logo" />
      </header>
      <div className="text-center">
        <h1 className={`text-2xl ${fleur.className}`}>Welcome to Cassive</h1>
        <h2
          className={`text-teal mt-3 text-4xl font-semibold ${poetsen.className}`}
        >
          We offer scalable website build
        </h2>
      </div>
    </main>
  );
};

export default Hero;
