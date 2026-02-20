import { Wrench, Hammer, Settings, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Изготовление отвалов",
    description:
      "Предоставляем  полный спектр услуг по изготовлению отвалов для техники:",
    features: ["Нива", "Каракат", "Уаз"],
  },
  {
    icon: Settings,
    title: "Модернизация",
    description:
      "Улучшение характеристик существующих отвалов, установка дополнительного оборудования.",
    features: [
      "Усиление конструкции",
      "Установка резиновых лент",
      "Модификация под задачи",
    ],
  },
  {
    icon: Wrench,
    title: "Бесплатная консультация",
    description:
      "ЧТО-ТО ВПИСАТЬ",
    features: [
      "Консультируем",
      "Учитываем ваши интересы",
      "Договариваемся о сроках",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Предоставляем полный спектр услуг по ремонту и изготовлению отвалов
            для спецтехники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
