import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/src/pictures/rob-lambert-9Q_pLLP_jmA-unsplash 1.jpg"
          alt="Сварочные работы"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Профессиональная сварка отвалов для спецтехники
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Качественное изготовление отвалов для вашей техники. Гарантия на все
            виды работ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
            >
              Получить консультацию
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              Наши услуги
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3  gap-6">
            {/* <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-8 h-8 text-orange-500 flex-shrink-0" />
              <div>
                <div className="text-white">Гарантия качества</div>
                <div className="text-gray-300 text-sm">До 1 года</div>
              </div>
            </div> */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-8 h-8 text-orange-500 flex-shrink-0" />
              <div>
                <div className="text-white">Быстрые сроки</div>
                <div className="text-gray-300 text-sm">1 неделя</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="w-8 h-8 text-orange-500 flex-shrink-0" />
              <div>
                <div className="text-white">Опыт работы</div>
                <div className="text-gray-300 text-sm">Более 5 лет</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
