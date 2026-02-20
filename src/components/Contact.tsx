import { useState } from "react";
import { Phone, Mail, MapPin, Send, Handshake } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Имитация отправки формы
  //   if (formData.name && formData.phone) {
  //     toast.success('Спасибо! Мы свяжемся с вами в ближайшее время.');
  //     setFormData({ name: '', phone: '', message: '' });
  //   } else {
  //     toast.error('Пожалуйста, заполните обязательные поля');
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Пожалуйста, заполните обязательные поля");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error("Ошибка сервера");
      }
    } catch (error) {
      toast.error("Ошибка при отправке формы. Попробуйте позже.");
      console.error("Ошибка отправки:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl text-primary mb-4 ">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto"></p>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"> */}
        <div
          className="grid justify-items-center
 max-w-6xl mx-auto"
        >
          <div>
            <h3 className="text-2xl text-primary mb-6">
              Контактная информация
            </h3>

            <div className="grid md:grid-cols-3 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-primary mb-1">Messenger</h4>
                  <a
                    href="https://t.me/vovkokos"
                    className="text-muted-foreground hover:text-orange-600 transition-colors"
                  >
                    Владимир в <em>Telegram</em>
                  </a>
                  <br />
                  <a
                    href="https://max.ru/u/f9LHodD0cOIMilXfE6RH0Mz2uavP8DZIbggwnPAEPbNU9OgPnuw9KOGRFtc"
                    className="text-muted-foreground hover:text-orange-600 transition-colors"
                  >
                    Владимир в <em> MAX</em>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-primary mb-1">Avito</h4>
                  <a
                    href="https://www.avito.ru/moskva/zapchasti_i_aksessuary/otval_na_karakat_vezdehod_otval_na_nivu_7567275411?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing"
                    className="text-muted-foreground hover:text-orange-600 transition-colors"
                  >
                    Производство отвалов
                    <br />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-primary mb-1">Адрес</h4>
                  <p className="text-muted-foreground">
                    г. Киров
                    <br />
                    Время работы: Пн-Пт 9:00-20:00, Сб-Вс выходной
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-orange-50 rounded-xl">
              <h4 className="text-primary mb-2">Бесплатная консультация</h4>
              <p className="text-muted-foreground">
                Свяжитесь с нами прямо сейчас и получите профессиональную
                консультацию изготовлению отвалов
              </p>
            </div>
          </div>

          {/* <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl text-primary mb-6">Заказать звонок</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-foreground mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors resize-none"
                    placeholder="Опишите ваш запрос..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  Отправить заявку
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
