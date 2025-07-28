import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logotipo from "../assets/logotipo.png";
import "./Navbar.css";
import { colors, fonts, shadows } from "../theme";
import AnimatedLogo from "./AnimatedLogo";
import GradientTitle from "./GradientTitle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hoverScale = { whileHover: { scale: 1.1 }, transition: { type: "spring", stiffness: 300 } };

  const navButtonStyle = (bgColor, hoverColor) => ({
    className: "text-white px-4 py-2 rounded-md transition",
    style: { backgroundColor: bgColor, fontFamily: fonts.body },
    onMouseEnter: (e) => (e.currentTarget.style.backgroundColor = hoverColor),
    onMouseLeave: (e) => (e.currentTarget.style.backgroundColor = bgColor),
  });

  return (
    <motion.nav
      animate={{
        paddingTop: scrolled ? "0.5rem" : "1rem",
        paddingBottom: scrolled ? "0.5rem" : "1rem",
        backgroundColor: scrolled ? `${colors.backgroundDark}ee` : colors.backgroundDark,
        boxShadow: scrolled ? shadows.cardHover : shadows.card,
      }}
      style={{
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      className="text-white px-4 md:px-10 sticky top-0 z-50"
    >
      <div className="flex items-center justify-between transition-all duration-300">
        {/* Logo y texto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
          style={{ fontFamily: fonts.heading }}
        >
          <AnimatedLogo/>

          <div style={{ textAlign: "center", marginTop: "0.25rem" }}>
            <GradientTitle/>
            <span
              className="text-sm"
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontFamily: fonts.body,
                fontWeight: "500",
                display: "block",
              }}
            >
              Santiago del Estero
            </span>
          </div>
        </motion.div>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm" style={{ fontFamily: fonts.body }}>
          <motion.span
            {...hoverScale}
            style={{ color: colors.textWhiteLight }}
          >
            🕒 Lun a Sáb: 9am a 23pm
          </motion.span>

          <motion.a
            {...hoverScale}
             href="https://wa.me/+5493854335822"
            target="_blank"
            rel="noopener noreferrer"
            {...navButtonStyle(colors.primaryGreen, colors.primaryGreenHover)}
          >
            WhatsApp
          </motion.a>

          <motion.a
            {...hoverScale}
            href="https://maps.google.com?q=-27.834648,-64.266857"
            target="_blank"
            rel="noopener noreferrer"
            {...navButtonStyle(colors.primaryYellow, colors.primaryYellowHover)}
          >
            Cómo llegar
          </motion.a>
        </div>

        {/* Botón hamburguesa */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú mobile */}
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
              🕒 Lun a Sáb: 9am a 23pm
            </span>
            <a
              href="https://wa.me/+5493854335822"
              target="_blank"
              rel="noopener noreferrer"
              {...navButtonStyle(colors.primaryGreen, colors.primaryGreenHover)}
              className="w-fit"
            >
              WhatsApp
            </a>
            <a
              href="https://maps.google.com?q=-27.834648,-64.266857"
              target="_blank"
              rel="noopener noreferrer"
              {...navButtonStyle(colors.primaryYellow, colors.primaryYellowHover)}
              className="w-fit"
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
