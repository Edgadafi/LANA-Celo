"use client";

import { useState } from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoLANA } from "./LogoLANA";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#seguridad", label: "Seguridad" },
  { href: "#pasos", label: "Cómo funciona" },
  { href: "#faq", label: "Preguntas" },
];

const appLinks = [
  { href: "/remittance", label: "Remesas" },
  { href: "/credit", label: "Microcréditos" },
  { href: "/send", label: "Enviar dinero" },
  { href: "/receive", label: "Recibir dinero" },
  { href: "/pay-cfe", label: "Pagar servicios" },
];

export function NavbarLANA() {
  const [open, setOpen] = useState(false);
  const [appMenuOpen, setAppMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-snow/80 backdrop-blur-xl border-b border-forest/10 shadow-soft"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
        <Link href="/" className="flex-shrink-0" aria-label="LANA.celo inicio">
          <LogoLANA size="md" variant="dark" />
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-forest/80 hover:text-prosperity font-lora font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="relative">
            <button
              type="button"
              onClick={() => setAppMenuOpen(!appMenuOpen)}
              onBlur={() => setTimeout(() => setAppMenuOpen(false), 150)}
              className="flex items-center gap-1 text-forest/80 hover:text-prosperity font-lora font-medium text-sm transition-colors"
            >
              Ir al app
              <ChevronDown className={cn("w-4 h-4 transition-transform", appMenuOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {appMenuOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full left-0 mt-2 py-2 w-48 rounded-2xl bg-white shadow-soft-lg border border-forest/10 z-50"
                >
                  {appLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-forest/80 hover:text-prosperity hover:bg-prosperity/5 font-lora text-sm transition-colors"
                        onClick={() => setAppMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <div className="flex items-center gap-3">
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
                      "px-5 py-2.5 rounded-[2.5rem] font-montserrat font-bold text-sm",
                      "bg-prosperity text-white shadow-soft",
                      "hover:bg-prosperity/90 hover:shadow-soft-lg transition-all"
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
                    className="px-5 py-2.5 rounded-[2.5rem] font-montserrat font-bold text-sm bg-red-500 text-white"
                  >
                    Red no soportada
                  </button>
                );
              }
              return (
                <button
                  onClick={openAccountModal}
                  type="button"
                  className={cn(
                    "px-5 py-2.5 rounded-[2.5rem] font-montserrat font-bold text-sm",
                    "bg-prosperity text-white shadow-soft"
                  )}
                >
                  {account.displayName}
                </button>
              );
            }}
          </ConnectButton.Custom>

          <button
            type="button"
            aria-label="Abrir menú"
            className="md:hidden p-2 rounded-2xl text-forest hover:bg-forest/5"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-snow/95 backdrop-blur-xl border-t border-forest/10"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-forest font-lora"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 mt-2 border-t border-forest/10">
                <span className="block py-1 text-forest/60 font-montserrat text-xs uppercase tracking-wider">Ir al app</span>
              </li>
              {appLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-forest font-lora"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
