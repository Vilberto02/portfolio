import Image from "next/image";
import Github from "@/assets/github_dark.svg"
import Linkdln from "@/assets/linkedin.svg";

export function Footer() {
  return (
    <footer className="flex justify-between items-center gap-8 bg-[#474747] text-white px-24 py-8">
      <p>Copyright © 2026. Todos los derechos reservados.</p>
      <div className="flex gap-3 items-center">
        <a href="https://github.com/Vilberto02/" target="_blank">
          <Image src={Github} alt="Logo de GitHub" width={24}></Image>
        </a>
        <a
          href="https://www.linkedin.com/in/vilberto-patricio-julca"
          target="_blank"
        >
          <Image
            src={Linkdln}
            alt="Logo de Linkdln"
            width={24}
            className="filter invert brightness-0"
          ></Image>
        </a>
      </div>
    </footer>
  );
}