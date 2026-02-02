"use client";

import { Lock, Smartphone, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Lock,
    title: "Tú eres la dueña",
    description:
      "Tu dinero vive en tu celular, no en un banco. Solo tú tienes el control. Nadie puede bloquear tu lana.",
  },
  {
    icon: Smartphone,
    title: "Cobro al instante",
    description:
      "Recibe pagos en segundos, sin esperar días ni pagar comisiones altas. Un check verde y listo.",
  },
  {
    icon: Shield,
    title: "Respaldo de la red Celo",
    description:
      "Tu dinero está protegido por una red descentralizada y transparente. Seguridad de verdad, sin intermediarios.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function SecuritySection() {
  return (
    <section
      id="seguridad"
      className="relative py-20 md:py-28 px-4 bg-snow overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-montserrat font-bold text-3xl md:text-4xl text-forest text-center mb-4"
        >
          Tu dinero, bajo tu control
        </motion.h2>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="font-lora text-forest/70 text-center text-lg max-w-2xl mx-auto mb-16"
        >
          Sin jerga técnica. Solo claridad: tú decides qué hacer con tu lana.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={item}
              className={cn(
                "p-8 rounded-[2.5rem] bg-white/80 backdrop-blur-xl",
                "border border-forest/10 shadow-soft hover:shadow-soft-lg",
                "transition-all duration-300 hover:-translate-y-1"
              )}
            >
              <div className="w-14 h-14 rounded-2xl bg-prosperity/15 flex items-center justify-center mb-6 text-prosperity">
                <card.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-3">
                {card.title}
              </h3>
              <p className="font-lora text-forest/75 leading-relaxed">
                {card.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
