import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold bg-gray-900">
                  <img src="src/pictures/logo/logo.png" alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-white">VVD Kaban</h3>
              </div>
            </div>
            <p className="text-gray-400">
              Профессиональный изготовление отвалов для спецтехники. Качество и
              надёжность гарантируем.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <a
                   href="https://t.me/vovkokos"
                  className="hover:text-orange-500 transition-colors"
                >
                 Telegram
                </a>
                {/* <Phone className="w-4 h-4 text-orange-500" />
                <a
                  href="tel:+79991234567"
                  className="hover:text-orange-500 transition-colors"
                >
                  +7 (999) 123-45-67
                </a> */}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <a
                  href="https://max.ru/u/f9LHodD0cOIMilXfE6RH0Mz2uavP8DZIbggwnPAEPbNU9OgPnuw9KOGRFtc"
                  className="hover:text-orange-500 transition-colors"
                >
                 MAX
                </a>
                <div>
                  <a href="https://www.avito.ru/kirovskaya_oblast_kirov/zapchasti_i_aksessuary/otval_dlya_karakata_vezdehoda_otval_na_nivu_7567849644?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing"></a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-1" />
                <span>г. Киров </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Режим работы</h4>
            <div className="space-y-2">
              <p>Понедельник - Пятница: 9:00 - 20:00</p>
              <p>Суббота - Воскресенье: Выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Сварка Отвалов. Все права защищены.
          </p>
          <div className="mt-4 space-x-4">
            <a href="/legal" className="text-gray-400 hover:text-orange-500 text-sm">
              Правовая информация
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
