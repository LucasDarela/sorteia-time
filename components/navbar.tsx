"use client";

import { useState } from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { ThemeSelector } from "@/components/theme-selector";
import { ModeToggle } from "@/components/toggle-theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          🎯 Sorteador
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          {/* <Link href="/" className="hover:text-gray-400 transition">Início</Link>
          <Link href="#" className="hover:text-gray-400 transition">Sorteador de Times</Link>
          <Link href="#" className="hover:text-gray-400 transition">Contato</Link> */}
          <ThemeSelector/>
          <ModeToggle/>
          {/* <Button >
            Login
          </Button> */}
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-3 bg-black">
          <div className="flex flex-cols-2 justify-evenly">
          <ThemeSelector/>
          <ModeToggle/>
          </div>
          {/* <Link href="/" onClick={() => setIsOpen(false)}>Início</Link>
          <Link href="#" onClick={() => setIsOpen(false)}>Sorteador de Times</Link>
          <Link href="#" onClick={() => setIsOpen(false)}>Contato</Link> */}

          {/* <Button>
            Login
          </Button> */}
        </div>
      )}
    </nav>
  );
}