"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "1",
    title: "Regístrate en minutos",
    description:
      "Solo necesitas tu celular y un correo. Sin papeles ni filas. En menos de 5 minutos estás lista para cobrar.",
  },
  {
    number: "2",
    title: "Cobra con tu voz",
    description:
      "Dile a tu cliente cuánto debe pagar y recibe el dinero al instante. Sin efectivo, sin riesgos.",
  },
  {
    number: "3",
    title: "Usa tu dinero",
    description:
      "Paga servicios, envía lana a tu familia o ahorra. Tu dinero va donde tú quieras, cuando quieras.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function StepsSection() {
  return (
    <section
      id="pasos"
      className="relative py-20 md:py-28 px-4 bg-forest text-snow overflow-hidden"
    >
      <div className="absolute inset-0 bg-forest/95 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-snow to-transparent pointer-events-none opacity-0 md:opacity-100" />
      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-4 text-snow"
        >
          Tres pasos para empezar
        </motion.h2>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="font-lora text-snow/80 text-center text-lg max-w-xl mx-auto mb-16"
        >
          Sin complicaciones. Así de simple.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={item}
              className={cn(
                "relative p-8 rounded-[2.5rem]",
                "bg-snow/10 backdrop-blur-xl border border-snow/20",
                "shadow-soft hover:shadow-soft-lg transition-all duration-300"
              )}
            >
              <div className="w-12 h-12 rounded-2xl bg-prosperity flex items-center justify-center mb-6 font-montserrat font-bold text-snow text-xl">
                {step.number}
              </div>
              <h3 className="font-montserrat font-bold text-xl text-snow mb-3">
                {step.title}
              </h3>
              <p className="font-lora text-snow/85 leading-relaxed">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/remittance"
            className={cn(
              "inline-block px-8 py-4 rounded-[2.5rem] font-montserrat font-bold text-forest",
              "bg-prosperity text-snow shadow-soft hover:shadow-soft-lg transition-all hover:scale-[1.02]"
            )}
          >
            Ir al app
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
