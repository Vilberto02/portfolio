"use client";
import { Reveal } from "@/components/Reveal";
import { Mail, FileText, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-8 md:px-24 flex justify-center"
    >
      <Reveal width="100%">
        <div className="border-[3px] border-black p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-white shadow-[12px_12px_0px_0px_rgba(147,51,234,1)]">
          <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left">
            <h2 className="font-header text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              ¿Tienes un proyecto en{" "}
              <span className="text-purple-600">mente?</span>
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              Estoy disponible para nuevos proyectos y colaboraciones. Hablemos
              sobre cómo puedo ayudarte a materializar tus ideas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
            <a
              href="mailto:tuemail@example.com"
              className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 text-lg font-bold hover:bg-stone-800 transition-colors border-2 border-black"
            >
              <Mail width={20} />
              Contáctame
              <ArrowRight width={20} className="ml-2" />
            </a>

            <a
              href="/cv"
              target="_blank"
              className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-lg font-bold hover:bg-stone-50 transition-colors border-2 border-black hover:border-purple-700 hover:text-purple-700"
            >
              <FileText width={20} />
              Revisar CV
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
