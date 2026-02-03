"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/remittance", label: "Remesas" },
  { href: "/credit", label: "Microcréditos" },
  { href: "/send", label: "Enviar dinero" },
  { href: "/receive", label: "Recibir dinero" },
  { href: "/pay-cfe", label: "Pagar servicios" },
];

export function FooterLANA() {
  return (
    <footer className="relative py-16 px-4 bg-forest text-snow overflow-hidden">
      <div className="absolute inset-0 bg-forest pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <p className="font-montserrat font-bold text-xl mb-2">LANA.celo</p>
            <p className="font-lora text-snow/80 text-sm max-w-xs">
              Cobros seguros al instante. Tu dinero, bajo tu control.
            </p>
          </div>
          <nav>
            <p className="font-montserrat font-bold text-sm text-snow/90 mb-3 uppercase tracking-wider">
              Navegación
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-lora text-snow/80 hover:text-prosperity transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-snow/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snow/10 border border-snow/20">
            <span className="w-2 h-2 rounded-full bg-prosperity" />
            <span className="font-lora text-sm font-medium">
              Potenciado por Celo
            </span>
          </div>
          <p className="font-lora text-snow/60 text-sm">
            © {new Date().getFullYear()} LANA.celo. Hecho con enfoque en ti.
          </p>
        </div>
      </div>
    </footer>
  );
}
