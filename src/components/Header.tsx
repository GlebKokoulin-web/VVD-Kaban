"use client";

import { Phone, Mail, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const navItems = [
    { label: "Услуги", id: "services" },
    { label: "Преимущества", id: "benefits" },
    { label: "Наши работы", id: "gallery" },
    { label: "Контакты", id: "contact" },
  ];

  const titleTag = location.pathname === "/legal" ? "h1" : "h2";

  if (location.pathname === "/legal") {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold bg-white">
                  <img
                    src="src/pictures/logo/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-primary">VVD Kaban</h1>
                <p className="text-xs text-muted-foreground">
                  Профессионально и надёжно
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold bg-white">
                <img
                  src="src/pictures/logo/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div>
              <h2 className="text-primary">VVD Kaban</h2>
              <p className="text-xs text-muted-foreground">
                Профессионально и надёжно
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-orange-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile burger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="header-burger"
                aria-label="Открыть меню"
              >
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Меню</SheetTitle>
              <SheetDescription className="sr-only">
                Навигация по сайту
              </SheetDescription>
              <nav className="sheet-nav">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
