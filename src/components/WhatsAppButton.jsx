import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/+5493854335822"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, duration: 0.6 }}
    style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      zIndex: 9999,
      backgroundColor: "#22c55e",
      width: 60,
      height: 60,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      cursor: "pointer",
      textDecoration: "none",
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      style={{ width: 32, height: 32 }}
    />
  </motion.a>
);

export default WhatsAppButton;
