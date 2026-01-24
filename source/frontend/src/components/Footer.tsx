import Image from "next/image";
import Github from "@/assets/github_dark.svg"
import Linkdln from "@/assets/linkedin.svg";

export function Footer() {
  return (
    <footer className="flex justify-between items-center gap-8 bg-[#474747] text-white px-24 py-8">
      <p>Copyright © 2026. Todos los derechos reservados.</p>
      <div className="flex gap-3 items-center">
        <Image src={Github} alt="Logo de GitHub" width={24}></Image>
        <Image
          src={Linkdln}
          alt="Logo de Linkdln"
          width={24}
          className="filter invert brightness-0"
        ></Image>
      </div>
    </footer>
  );
}