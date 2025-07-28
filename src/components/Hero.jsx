import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Smartphone, Unlock, Headphones } from "lucide-react";
import { colors, fonts } from "../theme";

const backgrounds = [
  "https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1470&q=80"
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        color: colors.textWhite,
        minHeight: "80vh",
        padding: "0 1.5rem",
        fontFamily: fonts.body,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Fondo animado */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${backgrounds[bgIndex]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            pointerEvents: "none",
          }}
        />
      </AnimatePresence>

      {/* Capa oscura */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          pointerEvents: "none",
        }}
      />

      {/* Contenido principal */}
      <div
        style={{
          position: "relative",
          maxWidth: 768,
          margin: "0 auto",
          paddingTop: "4rem",
          paddingBottom: "3rem",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "1.8rem",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontFamily: fonts.heading,
            fontWeight: "900",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#22c55e",
            lineHeight: 1.2,
          }}
        >
          Servicio Técnico de Celulares y Computadoras
        </motion.h1>

        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.7 }}
  style={{
    fontSize: "1.25rem",
    color: "#fefefe",
    opacity: 0.95,
    maxWidth: 640,
    margin: "0 auto",
    fontWeight: 500,
  }}
>
  Brindamos reparaciones, desbloqueos, limpieza profesional, recuperación de datos 
  y repuestos originales para tus dispositivos. Nuestro compromiso es entregarte 
  un servicio confiable, rápido y con atención personalizada que garantiza tu satisfacción.
</motion.p>


        {/* Íconos destacados */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#22c55e" }}>
            <Smartphone size={28} />
            Reparación Express
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#facc15" }}>
            <Unlock size={28} />
            Desbloqueos Seguros
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#3b82f6" }}>
            <Headphones size={28} />
            Accesorios Originales
          </div>
        </motion.div>

       {/* Botones de acción con iconos */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.2, duration: 0.6 }}
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
    marginTop: "1.5rem",
  }}
>
  <a
    href="https://wa.me/+5493854335822"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundColor: "#22c55e",
      padding: "0.75rem 1.5rem",
      borderRadius: "999px",
      color: "#fff",
      fontWeight: "700",
      fontSize: "1rem",
      textDecoration: "none",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      style={{ width: "20px", height: "20px" }}
    />
    WhatsApp
  </a>

  <a
    href="https://www.google.com/maps?q=-27.834648,-64.266857"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundColor: "#eab308",
      padding: "0.75rem 1.5rem",
      borderRadius: "999px",
      color: "#fff",
      fontWeight: "700",
      fontSize: "1rem",
      textDecoration: "none",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    }}
  >
   <img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/500px-Google_Maps_icon_%282020%29.svg.png"
  alt="Google Maps"
  style={{ width: "15px", height: "20px" }}
/>


    Cómo llegar
  </a>
</motion.div>


        {/* Teléfono */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{
            marginTop: "1.5rem",
            fontSize: "1rem",
            color: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Phone size={20} />
          <span>
            Llámanos:{" "}
            <a
              href="tel:+54 9 385 433-5822"
              style={{ textDecoration: "underline", color: "#fff" }}
            >
              +54 9 385 433-5822
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
