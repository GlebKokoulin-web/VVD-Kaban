import { Users, Zap, ThumbsUp, TrendingUp, Headphones, FileCheck } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Опытные специалисты',
    description: 'Квалифицированные сварщики с многолетним опытом работы',
  },
  {
    icon: Zap,
    title: 'Современное оборудование',
    description: 'Используем профессиональное сварочное оборудование',
  },
  {
    icon: ThumbsUp,
    title: 'Гарантия качества',
    description: 'Предоставляем гарантию на все выполненные работы',
  },
  {
    icon: TrendingUp,
    title: 'Конкурентные цены',
    description: 'Оптимальное соотношение цены и качества услуг',
  },
  {
    icon: Headphones,
    title: 'Консультации',
    description: 'Бесплатная консультация по выбору оптимального решения',
  },
  // {
  //   icon: FileCheck,
  //   title: 'Документы',
  //   description: 'Полный пакет документов на выполненные работы',
  // },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы гарантируем высокое качество работ и индивидуальный подход к каждому клиенту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
