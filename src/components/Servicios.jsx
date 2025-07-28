import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

import repairAnimation from "./lottie/iPhone.json";
import unlockAnimation from "./lottie/Unlock.json";
import pcAnimation from "./lottie/Computer.json";

import { colors, fonts, fontSizes, shadows, borderRadius } from "../theme";
import ServiceCards from "./ServiceCards";

const gradientColors = [
  "linear-gradient(135deg, #00c9a7, #92fe9d)",
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #f6d365, #fda085)",
];

const gradientTransition = {
  duration: 10,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const services = [
  {
    title: "Reparación de Celulares",
    icon: (
      <Lottie
        animationData={repairAnimation}
        loop
        style={{ height: 80, margin: "0 auto" }}
      />
    ),
    iconColor: colors.primaryGreen,
    description: "Pantallas, baterías, pines de carga, cámaras, y más.",
    details: [
      "Cambio de módulos (pantallas rotas)",
      "Reemplazo de baterías y conectores",
      "Cámaras, micrófonos y altavoces",
      "Problemas de encendido y software",
    ],
  },
  {
    title: "Desbloqueos",
    icon: (
      <Lottie
        animationData={unlockAnimation}
        loop
        style={{ height: 80, margin: "0 auto" }}
      />
    ),
    iconColor: "#fbbf24",
    description: "Google Account, netbooks del Gobierno, PIN y patrones.",
    details: [
      "Desbloqueo de cuenta Google (FRP)",
      "Netbooks del Gobierno (Conectar Igualdad)",
      "Contraseñas, PIN y patrones",
      "Desbloqueo remoto",
    ],
  },
  {
    title: "PCs y Notebooks",
    icon: (
      <Lottie
        animationData={pcAnimation}
        loop
        style={{ height: 80, margin: "0 auto" }}
      />
    ),
    iconColor: "#3b82f6",
    description: "Formateo, limpieza, SSD, RAM, virus, instalación de drivers.",
    details: [
      "Formateo e instalación de Windows",
      "Mejoras con SSD y ampliación de RAM",
      "Limpieza física y mantenimiento",
      "Eliminación de virus y drivers actualizados",
    ],
  },
];

const Servicios = () => {
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);
  const lastFocusedElement = useRef(null);
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradientColors.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selected !== null) {
      lastFocusedElement.current = document.activeElement;
      modalRef.current?.focus();
    } else {
      lastFocusedElement.current?.focus();
    }
  }, [selected]);

  return (
    <section
      id="servicios"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "3rem 1rem",
        fontFamily: fonts.body,
        minHeight: "100vh",
        backgroundColor: "#0f172a",
      }}
    >
      <motion.div
        animate={{ background: gradientColors[gradientIndex] }}
        transition={gradientTransition}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          filter: "blur(160px)",
          opacity: 0.4,
        }}
      />

      <h2
        style={{
          fontSize: fontSizes.h1,
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "2.5rem",
          color: colors.primaryGreen,
          fontFamily: fonts.heading,
          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
          position: "relative",
          zIndex: 1,
        }}
      >
        Nuestros Servicios
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          maxWidth: 1100,
          margin: "0 auto",
          zIndex: 1,
          position: "relative",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            tabIndex={0}
            role="button"
            onClick={() => setSelected(index)}
            onKeyDown={(e) => e.key === "Enter" && setSelected(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: shadows.cardHover }}
            whileFocus={{
              scale: 1.05,
              boxShadow: shadows.cardHover,
              outline: `3px solid ${colors.primaryGreen}`,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: `1px solid rgba(255,255,255,0.1)`,
              borderRadius: borderRadius.card,
              padding: "1.5rem",
              textAlign: "center",
              cursor: "pointer",
              outline: "none",
              backdropFilter: "blur(12px)",
              userSelect: "none",
            }}
          >
            <div style={{ marginBottom: "1rem", color: service.iconColor }}>
              {service.icon}
            </div>
            <h3
              style={{
                fontSize: fontSizes.h1Sm,
                fontWeight: "700",
                marginBottom: "0.75rem",
                fontFamily: fonts.heading,
                color: "#fff",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                color: "#d1d5db",
                marginBottom: "1.5rem",
                fontSize: fontSizes.pSm,
              }}
            >
              {service.description}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(index);
              }}
              style={{
                backgroundColor: colors.primaryGreen,
                color: "#fff",
                padding: "0.6rem 1rem",
                borderRadius: borderRadius.default,
                fontSize: fontSizes.pSm,
                fontWeight: "700",
                border: "none",
                cursor: "pointer",
                width: "100%",
                boxShadow: shadows.button,
              }}
            >
              Ver más detalles
            </button>
          </motion.div>
        ))}
      </div>

      <div style={{ height: "5rem" }} />

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "1rem",
            }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                borderRadius: borderRadius.card,
                maxWidth: 480,
                width: "100%",
                padding: "2.5rem 2rem",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                fontFamily: fonts.body,
                outline: "none",
                position: "relative",
              }}
              ref={modalRef}
              tabIndex={-1}
            >
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 16,
                  background: "transparent",
                  border: "none",
                  fontSize: "1.8rem",
                  color: "#6b7280",
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              <h3
                style={{
                  fontSize: fontSizes.h1Sm,
                  fontWeight: "700",
                  marginBottom: "1rem",
                  fontFamily: fonts.heading,
                  color: colors.primaryGreen,
                }}
              >
                {services[selected].title}
              </h3>

              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "1.5rem",
                  marginBottom: "1.75rem",
                  color: "#1f2937",
                  fontSize: fontSizes.pSm,
                }}
              >
                {services[selected].details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <a
                href="https://wa.me/543854335822?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio%20de%20reparación"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: colors.primaryGreen,
                  color: "#fff",
                  padding: "1rem",
                  borderRadius: borderRadius.default,
                  textAlign: "center",
                  display: "block",
                  fontWeight: "700",
                  textDecoration: "none",
                  boxShadow: shadows.button,
                }}
              >
                Solicitar este servicio por WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ServiceCards />
    </section>
  );
};

export default Servicios;
