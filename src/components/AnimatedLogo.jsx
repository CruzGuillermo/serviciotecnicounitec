import { motion } from "framer-motion";
import logotipo from "../assets/logotipo.png";

const AnimatedLogo = () => (
  <motion.img
    src={logotipo}
    alt="Unitec logo"
    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
    animate={{ opacity: 1, scale: [1, 1.05, 1], rotate: 0 }}
    transition={{
      opacity: { duration: 1 },
      scale: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
      rotate: { duration: 1 },
    }}
    style={{
      width: 80,
      
    }}
  />
);

export default AnimatedLogo;
