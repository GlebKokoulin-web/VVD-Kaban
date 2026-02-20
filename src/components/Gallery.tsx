import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    url: "src/pictures/gallery/1.jpeg",
    title: "Отвал для нивы",
  },
  {
    url: "src/pictures/gallery/3.jpeg",
    title: "Отвал для спецтехники",
  },
  {
    url: "src/pictures/gallery/2.jpeg",
    title: "Сварочный работы",
  },
  {
    url: "src/pictures/gallery/4.jpeg",
    title: "Производственный цех",
  },
  {
    url: "src/pictures/gallery/img001.jpg",
    title: "Ручная сварка металлоконструкций",
  },
  {
    url: "src/pictures/gallery/img002.jpg",
    title: "Установка отвала на трактор МТЗ",
  },
  {
    url: "src/pictures/gallery/img003.jpg",
    title: "Покраска отвала перед отправкой",
  },
  {
    url: "src/pictures/gallery/img004.jpg",
    title: "Регулировка угла отвала",
  },
  {
    url: "src/pictures/gallery/img005.jpg",
    title: "Отвал в сборке — вид сзади",
  },
  {
    url: "src/pictures/gallery/img006.jpg",
    title: "Примерка отвала на экскаватор",
  },
  {
    url: "src/pictures/gallery/img013.jpg",
    title: "Подключение гидравлики к отвалу",
  },
  {
    url: "src/pictures/gallery/img014.jpg",
    title: "Готовый отвал — финальная проверка",
  },
];

// export function Gallery() {
//   return (
//     <section id="gallery" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl text-primary mb-4">
//             Наши работы
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Примеры выполненных проектов по ремонту и изготовлению отвалов
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {galleryImages.map((image, index) => (
//             <div
//               key={index}
//               className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow aspect-video"
//             >
//               <ImageWithFallback
//                 src={image.url}
//                 alt={image.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <h3 className="text-xl text-white">{/* {image.title} */}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры выполненных проектов по ремонту и изготовлению отвалов
          </p>
        </div>

        {/* Галерея */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video cursor-pointer"
              onClick={() => setSelectedImage(image)} 
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-lg font-medium">
                    {/* {image.title} */}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно (лайтбокс) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)} // Закрытие при клике вне
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()} // Не закрывать при клике внутри
          >
            <button
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Закрыть"
            >
              ✕
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-center p-4 rounded-b-lg">
              {/* <p className="text-white text-lg">{selectedImage.title}</p> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
