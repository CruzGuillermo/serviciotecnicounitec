import { motion } from "framer-motion";
import { colors, fonts, fontSizes, shadows, borderRadius } from "../theme";

const AboutUs = () => {
  return (
    <section
      id="sobre-nosotros"
      style={{
        backgroundColor: "#0C2A47",
        padding: "4rem 1rem",
        maxWidth: 1000,
        margin: "0 auto",
        borderRadius: borderRadius.card,
        boxShadow: shadows.card,
        fontFamily: fonts.body,
        color: colors.textWhiteLight,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 400px",
            maxWidth: 500,
            textAlign: "left",
          }}
        >
          <motion.h2
            style={{
              fontSize: fontSizes.h1Md,
              fontWeight: "700",
              marginBottom: "1rem",
              fontFamily: fonts.heading,
              color: colors.primaryGreen,
            }}
          >
            Sobre Nosotros
          </motion.h2>
          <motion.p
            style={{
              fontSize: fontSizes.p,
              lineHeight: 1.6,
              marginBottom: "2rem",
              color: colors.textWhiteLight,
            }}
          >
            Somos apasionados por la tecnología y la reparación de dispositivos que forman parte 
            esencial de tu vida diaria. Nos dedicamos a devolver funcionalidad y confianza a tus 
            celulares, notebooks y otros equipos, con un compromiso claro: calidad, rapidez y 
            atención cercana que te haga sentir seguro.
          </motion.p>

          <motion.div
            style={{
              display: "inline-block",
              backgroundColor: colors.primaryGreen,
              color: "white",
              padding: "0.75rem 2rem",
              borderRadius: borderRadius.button,
              fontWeight: "600",
              userSelect: "none",
              fontSize: fontSizes.p,
              fontFamily: fonts.heading,
            }}
          >
            Calidad, Confianza y Cercanía
          </motion.div>
        </motion.div>

        {/* Imagen robot futurista */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 300px",
            maxWidth: 350,
            textAlign: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055672.png"
            alt="Robot Futurista"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: borderRadius.card,
              filter: "drop-shadow(0 5px 15px rgba(0, 201, 167, 0.5))",
            }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
