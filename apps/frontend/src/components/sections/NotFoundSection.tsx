import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Bug } from "lucide-react";

import { LiquidAtmosphere } from "@/components/ui/LiquidAtmosphere";

type NotFoundSectionProps = {
  copyright: string;
};

export function NotFoundSection({ copyright }: NotFoundSectionProps) {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-surface text-ink">
      <LiquidAtmosphere />
      <div className="relative mx-auto max-w-[1440px] px-6 pt-[116px] pb-[21px] lg:px-[72px] lg:pt-[260px] lg:pb-[57px]">
        <div className="grid lg:min-h-[540px] lg:grid-cols-[minmax(0,1.24fr)_minmax(0,1fr)] lg:gap-[76px]">
          <div aria-hidden="true" className="order-first mx-auto h-[210px] w-[260px] pt-[34px] lg:order-last lg:mx-0 lg:h-auto lg:w-auto lg:pt-[63px]">
            <p className="text-center text-[136px] font-bold leading-[1.21] tracking-[-9px] text-error-number lg:text-left lg:text-[clamp(10rem,15.34vw,16rem)] lg:tracking-[-17px]">
              404
            </p>
            <p className="mt-10 hidden pl-[75px] font-code text-[10px] tracking-[0.7px] text-muted lg:block">
              UN POCO DE TINTA. NINGUNA IDEA PERDIDA.
            </p>
          </div>

          <section aria-labelledby="not-found-heading" className="mt-[19px] text-center lg:mt-0 lg:text-left">
            <p className="flex items-center justify-center gap-2.5 font-code text-[10px] font-medium tracking-[0.4px] text-accent lg:justify-start lg:text-xs lg:tracking-[0.5px]">
              <Bug aria-hidden="true" size={16} className="hidden lg:block" />
              404 / RUTA_NO_ENCONTRADA
            </p>
            <h1 id="not-found-heading" className="mt-5 text-[clamp(2.25rem,10.77vw,2.625rem)] font-semibold leading-[1.08] tracking-[-1.6px] lg:mt-7 lg:text-[clamp(3rem,4.68vw,4.875rem)] lg:leading-[1.05] lg:tracking-[-3.2px]">
              Esta página salió<br />del guion.
            </h1>
            <p className="mt-5 text-[15px] leading-[1.65] text-muted lg:mt-7 lg:text-[17px]">
              Esta página no está aquí.<br />Puede haberse movido o el enlace tomó otro rumbo.
            </p>
            <div className="mt-5 flex flex-col items-center gap-5 lg:mt-7 lg:flex-row lg:flex-wrap lg:gap-7 lg:pt-2">
              <Link href="/" className="inline-flex h-[47px] items-center gap-3 rounded-full bg-recovery-button px-[25px] text-sm font-semibold text-recovery-button-ink transition-colors hover:bg-recovery-button-hover focus-visible:outline-2 lg:h-[49px] lg:gap-3.5 lg:px-6">
                <ArrowLeft aria-hidden="true" size={17} />
                Volver al inicio
              </Link>
              <Link href="/#work" className="group inline-flex items-center gap-1 text-[13px] font-medium underline-offset-4 hover:underline focus-visible:outline-2 lg:text-sm">
                Explorar mis proyectos
                <ArrowUpRight aria-hidden="true" size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
              </Link>
            </div>
          </section>
        </div>

        <aside className="mt-[107px] text-center lg:mt-0 lg:border-t lg:border-line lg:pt-7 lg:text-left">
          <p className="font-editorial text-[26px] leading-[1.3] tracking-[-0.2px] text-accent italic lg:text-[32px]">
            Nada se rompió. Solo fue un desvío.
          </p>
        </aside>
        <footer className="mt-[29px] flex justify-between gap-6 font-code text-[9px] text-muted lg:mt-[98px] lg:text-[11px]">
          <p>{copyright}</p>
          <p className="hidden text-[10px] tracking-[0.5px] lg:block">DISEÑO CON INTENCIÓN. INCLUSO EN LOS DESVÍOS.</p>
        </footer>
      </div>
    </main>
  );
}
