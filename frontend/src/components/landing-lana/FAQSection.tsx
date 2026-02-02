"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Es seguro guardar mi dinero en la app?",
    answer:
      "Sí. Tu dinero está respaldado por la red Celo, una red descentralizada y transparente. Solo tú tienes acceso con tu celular; nadie más puede mover tu lana sin tu autorización.",
  },
  {
    question: "¿Qué pasa si pierdo mi celular?",
    answer:
      "Tu dinero no está “en el celular” como en una billetera física. Está en la red. Con tu frase de recuperación (que debes guardar en un lugar seguro) puedes recuperar el acceso desde otro dispositivo.",
  },
  {
    question: "¿Puedo usar LANA sin saber de cripto?",
    answer:
      "Sí. No necesitas entender tokens ni blockchains. Solo piensa en “dinero” y “cobros”: cobras, recibes tu dinero y lo usas. Nosotros nos encargamos del resto.",
  },
  {
    question: "¿Cuánto cuesta cobrar?",
    answer:
      "Comisiones ultra bajas, de centavos por transacción. Mucho menos que cobrar en efectivo o con terminales tradicionales. Sin sorpresas ni cargos ocultos.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 px-4 bg-snow overflow-hidden"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-montserrat font-bold text-3xl md:text-4xl text-forest text-center mb-4"
        >
          Preguntas frecuentes
        </motion.h2>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="font-lora text-forest/70 text-center text-lg mb-12"
        >
          Resolvemos tus dudas sobre seguridad y tu dinero.
        </motion.p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "rounded-[2.5rem] bg-white/80 backdrop-blur-xl",
                "border border-forest/10 shadow-soft overflow-hidden"
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left font-montserrat font-bold text-forest hover:bg-forest/5 transition-colors"
              >
                <span className="text-base md:text-lg">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-prosperity flex-shrink-0 transition-transform",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 font-lora text-forest/80 leading-relaxed border-t border-forest/10 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
