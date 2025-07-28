import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { colors, borderRadius, shadows, fonts } from "../theme";

const servicesData = [
  {
    title: "Reparación de Pantallas",
    description:
      "Cambiamos pantallas rotas o táctiles dañadas con repuestos originales. Servicio rápido y garantizado.",
    image: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/12/08/61b0aef5b7c5b.jpeg",
  },
  {
    title: "Desbloqueo de Celulares",
    description:
      "Liberamos celulares de todas las compañías. Soluciones seguras, sin perder tus datos.",
    image: "https://celurex16blog.wordpress.com/wp-content/uploads/2017/06/slider5-e1497390722678.jpg?w=772",
  },
  {
    title: "Cambio de Baterías",
    description:
      "Baterías que duran poco o se hinchan. Reemplazo profesional con prueba de consumo incluida.",
    image: "https://i.blogs.es/5aff35/captura-de-pantalla-2024-01-23-a-las-10.51.48/1366_2000.jpeg",
  },
  {
    title: "Reparación de Puertos de Carga",
    description:
      "Solucionamos problemas con el puerto de carga, conectores dañados o problemas de carga lenta.",
    image: "https://www.movilcrack.com/media/catalog/category/1_3.png_1.jpg",
  },
  {
    title: "Actualización y Optimización de Software",
    description:
      "Actualizamos el sistema operativo y optimizamos el rendimiento para que tu dispositivo funcione como nuevo.",
    image: "https://informaticos.co/wp-content/uploads/2023/02/Actualizaciones-de-software-no-las-ignores.jpg",
  },
  {
    title: "Recuperación de Datos",
    description:
      "Recuperamos fotos, videos y documentos borrados o perdidos en dispositivos dañados o formateados.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9vdzev7zAOFIA9SQJWcB61nllVA1k4qdHQ&s",
  },
  {
    title: "Instalación de Antivirus y Seguridad",
    description:
      "Protegemos tu equipo contra virus, malware y ataques, instalando y configurando software de seguridad confiable.",
    image: "https://revistaseguridad360.com/wp-content/uploads/2022/02/antivirus-1-scaled.jpg",
  },
  {
    title: "Limpieza Interna Notebooks y Pc",
    description:
      "Eliminamos suciedad, polvo y residuos del interior del equipo para mejorar su rendimiento y evitar fallas.",
    image: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2016/08/189934-como-limpiar-portatil-dentro.jpg?tf=3840x",
  },
];

const ServiceCards = () => {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const updateCardWidth = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setCardWidth(scrollRef.current.offsetWidth / 4);
    } else if (screenWidth >= 640) {
      setCardWidth(scrollRef.current.offsetWidth / 3);
    } else {
      setCardWidth(scrollRef.current.offsetWidth / 2);
    }
  };

  useEffect(() => {
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const scrollAmount = cardWidth + 24;

        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(scroll, 4000);
    return () => clearInterval(interval);
  }, [cardWidth]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -cardWidth - 24, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
  };

  return (
    <div>
    <div className="relative w-full overflow-hidden">
      <div className=" ">
      {/* Botones */}
      

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth space-x-2 py-6 px-4 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
            style={{
              width: `${cardWidth}px`,
              scrollSnapAlign: "start",
              backgroundColor: "#fff",
              borderRadius: borderRadius.card,
              boxShadow: shadows.card,
              padding: "1.25rem",
              fontFamily: fonts.body,
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full object-cover rounded-xl mb-4"
              style={{
                height: "clamp(120px, 25vw, 160px)",
              }}
            />
            <h3
              style={{
                color: colors.primaryGreen,
                fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                fontFamily: fonts.heading,
                marginBottom: "0.5rem",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                color: "#4B5563",
                fontSize: "clamp(0.75rem, 1vw, 1rem)",
                lineHeight: 1.4,
              }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 
        hover:bg-gray-100 sm:text-green-500 sm:bg-white"
        style={{
          color: window.innerWidth < 640 ? "#22c55e" : "#000",
        }}
      >
        &#60;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 
        hover:bg-gray-100 sm:text-green-500 sm:bg-white"
        style={{
          color: window.innerWidth < 640 ? "#22c55e" : "#000",
        }}
      >
        &#62;
      </button>
      </div>
    </div>
    </div>
  );
};

export default ServiceCards;
