import { Phone, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
  } else {
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

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-orange-600 transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-foreground hover:text-orange-600 transition-colors"
              >
                Преимущества
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-foreground hover:text-orange-600 transition-colors"
              >
                Наши работы
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-orange-600 transition-colors"
              >
                Контакты
              </button>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
