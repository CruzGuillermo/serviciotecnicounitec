import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors, fonts, fontSizes, shadows, borderRadius } from "../theme";
import iphone12promax from "./accesorios/14.jpg";
import iphone15promax from "./accesorios/15.jpg";
import motog8power from "./accesorios/5.jpg";
import motog30s from "./accesorios/1.jpg";
import iphone12pro from "./accesorios/3.jpg";
import iphone13 from "./accesorios/12.jpg";
import samsumgA03s from "./accesorios/7.jpg";
import samsumgA32 from "./accesorios/9.jpg";
import samsumgA12 from "./accesorios/11.jpg";
import samsumgA01 from "./accesorios/16.jpg";
import samsumgA22 from "./accesorios/17.jpg";

const accesorios = [
  { id: 1, nombre: "Funda Silicona iPhone 12 Pro Max", imagen: iphone12promax },
  { id: 2, nombre: "Funda Transparente Iphone 13 Pro Max", imagen: iphone15promax },
  { id: 3, nombre: "Funda Silicona Moto G8 Power Lite", imagen: motog8power },
  { id: 4, nombre: "Funda Silicona Moto G60 s", imagen: motog30s },
  { id: 5, nombre: "Funda Silicona Iphone 12 Pro", imagen: iphone12pro },
  { id: 6, nombre: "Funda Transparente Iphone 13", imagen: iphone13 },
  { id: 7, nombre: "Funda Transparente Samsung A03 s", imagen: samsumgA03s },
  { id: 8, nombre: "Funda Transparente Samsung A32", imagen: samsumgA32 },
  { id: 9, nombre: "Funda Transparente Samsung A12", imagen: samsumgA12 },
  { id: 10, nombre: "Funda Silicona Samsung A01", imagen: samsumgA01 },
  { id: 11, nombre: "Funda Transparente Samsung A22", imagen: samsumgA22 },
];

const AccesoriosDestacados = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [modalData, setModalData] = useState(null); // ← Modal State

  useEffect(() => {
    function updateItems() {
      const width = window.innerWidth;

      if (width < 480) {
        setItemsPerPage(2); // móviles chicos
      } else if (width < 768) {
        setItemsPerPage(3); // móviles grandes
      } else {
        setItemsPerPage(4); // tablets o desktop
      }
    }

    updateItems(); // llamar una vez al montar
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalPages = Math.ceil(accesorios.length / itemsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  };

  // Resetea índice si cambia itemsPerPage y el índice actual queda fuera de rango
  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(0);
    }
  }, [itemsPerPage, currentIndex, totalPages]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage]);

  const openModal = (producto) => {
    setModalData(producto);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <section
      id="accesorios-destacados"
      style={{
        padding: "3rem 1rem",
        maxWidth: 1100,
        margin: "0 auto",
        fontFamily: fonts.body,
        color: colors.textDark,
        position: "relative",
      }}
    >
      <h2
        style={{
          fontSize: fontSizes.h1Md,
          fontWeight: "700",
          marginBottom: "2rem",
          color: colors.primaryGreen,
          fontFamily: fonts.heading,
          textAlign: "center",
        }}
      >
        Accesorios Destacados
      </h2>

      <div style={{ overflow: "hidden", padding: "0 1rem" }}>
        <motion.div
          animate={{ x: `-${(currentIndex * 100) / accesorios.length}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateColumns: `repeat(${accesorios.length}, minmax(0, calc(100% / ${itemsPerPage})))`,
            gap: "1.8rem",
            width: `${(accesorios.length * 100) / itemsPerPage}%`,
          }}
        >
          {accesorios.map((producto) => (
            <div
              key={producto.id}
              onClick={() => openModal(producto)}
              style={{
                backgroundColor: "#fff",
                borderRadius: borderRadius.card,
                boxShadow: shadows.card,
                cursor: "pointer",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                userSelect: "none",
                height: 280,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
              {/* Nombre (30% del alto) */}
              <div
                style={{
                  padding: "0.5rem",
                  textAlign: "center",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: colors.textDark,
                  backgroundColor: "#161414ff",
                  height: "auto",
                }}
              >
                {producto.nombre}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button
          onClick={prevPage}
          style={{
            backgroundColor: colors.primaryGreen,
            border: "none",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: borderRadius.button,
            cursor: "pointer",
            fontWeight: "700",
            fontSize: fontSizes.p,
            boxShadow: shadows.button,
          }}
        >
          {"<"}
        </button>
        <button
          onClick={nextPage}
          style={{
            backgroundColor: colors.primaryGreen,
            border: "none",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: borderRadius.button,
            cursor: "pointer",
            fontWeight: "700",
            fontSize: fontSizes.p,
            boxShadow: shadows.button,
          }}
        >
          {">"}
        </button>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(6px)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              cursor: "pointer",
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                backgroundColor: "#fff",
                borderRadius: "1rem",
                padding: "1.5rem",
                maxWidth: "90vw",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: shadows.card,
              }}
            >
              <img
                src={modalData.imagen}
                alt={modalData.nombre}
                style={{
                  maxWidth: "100%",
                  maxHeight: "60vh",
                  objectFit: "contain",
                  borderRadius: "0.5rem",
                }}
              />
              <h3
                style={{
                  marginTop: "1rem",
                  fontSize: "20px",
                  color: "black",
                  textAlign: "center",
                }}
              >
                {modalData.nombre}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AccesoriosDestacados;
