"use client";

import { useState } from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function HeroImage() {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-prosperity/10 text-forest/60 font-lora text-center p-8">
        Emprendedora cobrando con su celular en su comercio
      </div>
    );
  }
  return (
    <img
      src="/images/hero-comercio.png"
      alt="Emprendedora latina cobrando con el celular en su comercio"
      className="w-full h-full object-contain object-center"
      onError={() => setError(true)}
    />
  );
}

export function HeroLANA() {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-4 pt-24 pb-16 overflow-hidden bg-snow">
      <div className="absolute inset-0 bg-gradient-to-br from-prosperity/5 via-transparent to-honey/5 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-prosperity/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-honey/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-xl text-center md:text-left"
      >
        <motion.p
          variants={item}
          className="text-prosperity font-montserrat font-bold text-sm uppercase tracking-wider mb-4"
        >
          Potenciado por Celo
        </motion.p>
        <motion.h1
          variants={item}
          className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-forest leading-tight mb-6"
        >
          Cobros seguros al instante, a la voz y con comisiones ultra bajas.
        </motion.h1>
        <motion.p
          variants={item}
          className="font-lora text-forest/80 text-lg md:text-xl mb-8 max-w-lg"
        >
          Deja el efectivo atrás. Recibe tu dinero directo en tu celular, sin
          filas ni riesgos. Tú eres la dueña de tu lana.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center md:justify-start">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              if (!ready) return null;
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className={cn(
                      "px-8 py-4 rounded-[2.5rem] font-montserrat font-bold text-snow",
                      "bg-prosperity shadow-soft hover:shadow-soft-lg transition-all hover:scale-[1.02]"
                    )}
                  >
                    Empieza a Cobrar
                  </button>
                );
              }
              if (chain?.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="px-8 py-4 rounded-[2.5rem] font-montserrat font-bold text-white bg-red-500"
                  >
                    Cambiar red
                  </button>
                );
              }
              return (
                <button
                  onClick={openAccountModal}
                  type="button"
                  className={cn(
                    "px-8 py-4 rounded-[2.5rem] font-montserrat font-bold text-snow bg-prosperity"
                  )}
                >
                  {account.displayName}
                </button>
              );
            }}
          </ConnectButton.Custom>
          <Link
            href="#pasos"
            className={cn(
              "px-8 py-4 rounded-[2.5rem] font-montserrat font-bold text-forest",
              "border-2 border-forest/20 hover:border-prosperity hover:text-prosperity transition-all"
            )}
          >
            Cómo funciona
          </Link>
          <Link
            href="/remittance"
            className={cn(
              "px-8 py-4 rounded-[2.5rem] font-montserrat font-bold text-snow",
              "bg-forest/90 hover:bg-forest border-2 border-forest transition-all"
            )}
          >
            Ir al app
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 w-full max-w-md aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-soft-lg bg-snow flex items-center justify-center"
      >
        <HeroImage />
      </motion.div>
    </section>
  );
}
