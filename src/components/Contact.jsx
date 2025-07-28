import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contacto = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [sending, setSending] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const gradients = [
    "linear-gradient(135deg, #00c9a7, #92fe9d)",
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #f6d365, #fda085)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % gradients.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setResultMessage("");

    emailjs
      .sendForm(
        "service_m38evin", // tu Service ID
        "template_ptls283", // el Template ID que definiste en EmailJS
        e.target,
        "e_Vsp0vVh3J_-Ucvn" // tu User ID o Public Key (lo tienes en EmailJS)
      )
      .then(
        (result) => {
          setSending(false);
          setResultMessage("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
          e.target.reset();
        },
        (error) => {
          setSending(false);
          setResultMessage("Error al enviar el mensaje. Por favor intenta nuevamente.");
          console.error(error);
        }
      );
  };

  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
      {/* Fondo degradado animado */}
      <motion.div
        animate={{ backgroundImage: gradients[bgIndex] }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          filter: "blur(120px)",
          opacity: 0.5,
          transition: "background-image 1s ease-in-out",
        }}
      />

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contacto</h2>
        <p className="text-lg">¡Estamos para ayudarte! Completá el formulario o contactanos directamente.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Formulario */}
        <form onSubmit={sendEmail} className="space-y-4 bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-md">
          <input
  type="text"
  name="name"
  placeholder="Nombre"
  className="w-full p-3 rounded bg-white/80 text-black"
  required
/>
<input
  type="email"
  name="email"
  placeholder="Email"
  className="w-full p-3 rounded bg-white/80 text-black"
  required
/>
<textarea
  name="message"
  placeholder="Mensaje"
  className="w-full p-3 rounded bg-white/80 text-black"
  rows="4"
  required
/>

          <button
            type="submit"
            disabled={sending}
            className={`w-full py-3 ${sending ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"} text-white font-semibold rounded transition`}
          >
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
          {resultMessage && (
            <p className="mt-4 text-center font-semibold">{resultMessage}</p>
          )}
        </form>

        {/* Info de contacto y mapa */}
        <div className="space-y-6">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-md">
            <h3 className="text-xl font-bold mb-2">Datos de contacto</h3>
            <p><strong>📍 Dirección:</strong> Campo Contreras - Mza 64, Lote 7</p>
            <p><strong>📞 Teléfono:</strong> 3854 335822</p>
            <p><strong>📧 Email:</strong> serviciotecnico.unitec64@gmail.com</p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              title="Ubicación de nuestro local"
              width="100%"
              height="250"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=-27.834639,-64.266861&hl=es&z=15&output=embed"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
