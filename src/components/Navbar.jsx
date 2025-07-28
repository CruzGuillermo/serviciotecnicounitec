import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoAnim from "../assets/Voice.json";
import logotipo from "../assets/logotipo.png"
import Lottie from "lottie-react";
import "./Navbar.css";


import { colors, fonts, shadows, borderRadius } from "../theme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        paddingTop: scrolled ? "0.5rem" : "1rem",
        paddingBottom: scrolled ? "0.5rem" : "1rem",
        backgroundColor: scrolled ? `${colors.backgroundDark}ee` : colors.backgroundDark,
        boxShadow: scrolled
          ? shadows.cardHover
          : shadows.card,
      }}
      style={{
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      className="text-white px-4 md:px-10 sticky top-0 z-50"
    >
      <div className="flex items-center justify-between transition-all duration-300">
        {/* Logo animado */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
          style={{ fontFamily: fonts.heading }}
        >
         
  <img src={logotipo} alt="" style={{width:80 , }}/>


       <div style={{ textAlign: "center", marginTop: "0.25rem" }}>
  <motion.h1
    initial={{ opacity: 0, y: -20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
    className="gradient-text"
    style={{ margin: 0 }}
  >
    Unitec
  </motion.h1>

  <span
    className="text-sm"
    style={{
      color: "rgba(255, 255, 255, 0.6)",
      fontFamily: fonts.body,
      display: "block",
      // marginTop: "0.3rem",
      fontWeight: "500",
    }}
  >
    Santiago del Estero
  </span>
</div>

        </motion.div>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm" style={{ fontFamily: fonts.body }}>
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ color: colors.textWhiteLight }}
          >
            🕒 Lun a Sáb: 9am a 23pm
          </motion.span>

          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://wa.me/+5493854335822"
            className="text-white px-4 py-2 rounded-md transition"
            style={{
              backgroundColor: colors.primaryGreen,
              fontFamily: fonts.body,
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = colors.primaryGreenHover}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = colors.primaryGreen}
          >
            WhatsApp
          </motion.a>

          <motion.a
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 300 }}
  href="https://www.google.com/maps?q=-27.834648,-64.266857"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white px-4 py-2 rounded-md transition"
  style={{
    backgroundColor: colors.primaryYellow,
    fontFamily: fonts.body,
  }}
  onMouseEnter={e => e.currentTarget.style.backgroundColor = colors.primaryYellowHover}
  onMouseLeave={e => e.currentTarget.style.backgroundColor = colors.primaryYellow}
>
  Cómo llegar
</motion.a>

        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 flex flex-col gap-4 md:hidden text-sm overflow-hidden"
            style={{ fontFamily: fonts.body }}
          >
            <span style={{ color: colors.textWhiteLight }}>
              🕒 Lun a Sáb: 9 a 13 / 17 a 21
            </span>
            <a
              href="https://wa.me/543854000000"
              className="text-white px-4 py-2 rounded-md w-fit transition"
              style={{ backgroundColor: colors.primaryGreen }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = colors.primaryGreenHover)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = colors.primaryGreen)}
            >
              WhatsApp
            </a>
            <a
              href="https://maps.google.com?q=Santiago+del+Estero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-2 rounded-md w-fit transition"
              style={{ backgroundColor: colors.primaryYellow }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = colors.primaryYellowHover)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = colors.primaryYellow)}
            >
              Cómo llegar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
