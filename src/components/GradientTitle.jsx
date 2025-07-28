import { motion } from "framer-motion";
import { colors, fonts } from "../theme";

const GradientTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        fontFamily: fonts.heading,
        fontSize: "1.2rem", // Más grande que h2
        fontWeight: 900,     // Más grueso
        color: colors.primaryGreen,
        marginBottom: "0.5rem",
        textTransform: "uppercase",
        letterSpacing: "3px",
        userSelect: "none",
      }}
    >
      
      <span style={{ color: "#22c55e" }}>Unitec</span>
    </motion.h1>
  );
};

export default GradientTitle;
