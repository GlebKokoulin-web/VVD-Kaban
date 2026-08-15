import { useEffect } from "react";
import { Link } from "react-router-dom";

export function LegalPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Правовая информация — VVD Kaban",
      description:
        "Политика конфиденциальности, пользовательское соглашение и авторские права сайта VVD Kaban. Профессиональная сварка и изготовление отвалов в Кирове.",
      url: "https://vvdkaban.ru/legal",
      inLanguage: "ru-RU",
      isPartOf: {
        "@type": "WebSite",
        name: "VVD Kaban — Сварка отвалов",
        url: "https://vvdkaban.ru/",
      },
    });
    document.head.appendChild(script);

    // Обновляем title и meta-теги
    document.title = "Правовая информация — VVD Kaban";

    // Обновляем og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Правовая информация — VVD Kaban");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.setAttribute("content", "Правовая информация — VVD Kaban");
      document.head.appendChild(meta);
    }

    // Обновляем og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        "content",
        "Политика конфиденциальности, пользовательское соглашение и авторские права сайта VVD Kaban.",
      );
    }

    // Обновляем og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", "https://vvdkaban.ru/legal");
    }

    // Обновляем canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://vvdkaban.ru/legal");
    }

    // Очистка при уходе со страницы
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Правовая информация
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Политика конфиденциальности
            </h2>
            <p className="text-gray-700 mb-4">
              Настоящая Политика конфиденциальности описывает, как мы
              обрабатываем вашу информацию на сайте VVD Kaban.
            </p>
            <p className="text-gray-700 mb-4">
              Мы не собираем никакой личной информации о пользователях нашего
              сайта. Все контакты с нами осуществляются через внешние платформы
              (Telegram, Avito, MAX), и любая передача данных происходит
              исключительно на их платформах.
            </p>
            <p className="text-gray-700">
              Мы не используем файлы cookie для отслеживания пользователей и не
              передаём данные третьим лицам.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Пользовательское соглашение
            </h2>
            <p className="text-gray-700 mb-4">
              Используя наш сайт, вы соглашаетесь с тем, что:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                Мы предоставляем информацию о наших услугах по изготовлению
                отвалов для спецтехники
              </li>
              <li>
                Все заказы и переговоры осуществляются напрямую с нами через
                указанные контактные данные
              </li>
              <li>
                Мы не несём ответственности за доставку, оплату или другие
                условия, которые согласуются отдельно
              </li>
              <li>
                Информация на сайте носит справочный характер и может быть
                изменена без предварительного уведомления
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Авторские права
            </h2>
            <p className="text-gray-700">
              Все материалы на сайте, включая тексты, изображения и дизайн,
              являются собственностью VVD Kaban и защищены законодательством
              Российской Федерации об авторских правах. Любое копирование,
              распространение или использование материалов без письменного
              разрешения запрещено.
            </p>
          </section>

          <div className="pt-6 border-t">
            <p className="text-sm text-gray-600">
              Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-orange-600 hover:text-orange-800 font-medium"
          >
            &larr; Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
