import { motion } from "framer-motion";
import { Facebook, Instagram, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { colors, fonts, fontSizes } from "../theme";
import logotipo from "../assets/logotipo.png";

const socialLinks = [
  { Icon: Facebook, url: "https://www.facebook.com/share/15PdzoDg6z/?mibextid=wwXIfr" },
  { Icon: Instagram, url: "https://www.instagram.com/serviciotecnicounitec?igsh=cnMydjNxcGxqdWpv&utm_source=qr" },
  { Icon: FaWhatsapp, url: "https://wa.me/+5493854335822" }, // <-- Reemplazá con tu número real
];

const handleShare = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Unitec - Servicio Técnico",
        text: "Reparaciones rápidas y accesorios de calidad en Unitec ⚡️",
        url: window.location.href,
      })
      .catch((error) => console.error("Error al compartir:", error));
  } else {
    alert("Tu navegador no admite la función para compartir.");
  }
};

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #0f172a 0%, #020617 100%)",
        color: colors.textWhiteLight,
        fontFamily: fonts.body,
        padding: "4rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        borderTop: `2px solid ${colors.primaryGreen}`,
      }}
    >
      {/* Fondo decorativo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle, #22c55e33 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
          opacity: 0.05,
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ flex: "1 1 250px", minWidth: 250 }}
        >
          <img src={logotipo} alt="" style={{ width: 80 }} />
          <h3
            style={{
              fontFamily: fonts.heading,
              fontSize: fontSizes.h2,
              color: colors.primaryGreen,
              marginBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            SERVICIO TÉCNICO <span style={{ color: "#22c55e" }}>Unitec</span>
          </h3>
          <p
            style={{
              fontSize: fontSizes.p,
              lineHeight: 1.6,
              maxWidth: 300,
              color: "#cbd5e1",
            }}
          >
            Reparaciones rápidas, accesorios de calidad y atención personalizada.
          </p>
        </motion.div>

        {/* Navegación */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            flex: "1 1 150px",
            minWidth: 150,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <h4
            style={{
              color: colors.primaryGreen,
              fontFamily: fonts.heading,
              fontSize: fontSizes.h4,
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            Enlaces
          </h4>
          {["Inicio", "Servicios", "Accesorios", "Contacto"].map((item, idx) => (
            <motion.a
              key={idx}
              href={`#${item.toLowerCase()}`}
              whileHover={{
                color: colors.primaryGreen,
                scale: 1.05,
                textShadow: "0 0 8px #22c55e",
              }}
              style={{
                fontSize: fontSizes.p,
                color: "#94a3b8",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        {/* Redes sociales + Compartir */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            flex: "1 1 250px",
            minWidth: 200,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h4
            style={{
              fontFamily: fonts.heading,
              color: colors.primaryGreen,
              fontSize: fontSizes.h4,
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            Síguenos
          </h4>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {socialLinks.map(({ Icon, url }, idx) => (
              <motion.a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  color: colors.primaryGreen,
                  textShadow: "0 0 12px #22c55e",
                }}
                style={{
                  color: "#cbd5e1",
                  fontSize: "1.8rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s",
                }}
              >
                <Icon />
              </motion.a>
            ))}

            {/* Botón Compartir */}
            <motion.button
              onClick={handleShare}
              whileHover={{
                scale: 1.05,
                backgroundColor: colors.primaryGreen,
                color: "#0f172a",
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                border: `1px solid ${colors.primaryGreen}`,
                padding: "0.4rem 0.8rem",
                borderRadius: "999px",
                color: "#cbd5e1",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              title="Compartir este sitio"
            >
              <Share2 size={18} />
              Compartir
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.7 }}
        style={{
          marginTop: "3rem",
          borderTop: `1px solid ${colors.primaryGreen}`,
          paddingTop: "1rem",
          fontSize: fontSizes.pSm,
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        &copy; {new Date().getFullYear()} Unitec. Todos los derechos reservados.
      </motion.div>
    </footer>
  );
};

export default Footer;
