import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      "subject",
      "Nuevo mensaje desde mi Portafolio"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("✅ ¡Mensaje enviado correctamente!");
      event.target.reset();
    } else {
      setResult("❌ Ocurrió un error. Inténtalo nuevamente.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contacto"
      className="bg-[#09090B] text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Título */}

        <div className="text-center mb-16">
          <span className="text-violet-400 font-semibold uppercase tracking-widest">
            Contacto
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Hablemos
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            ¿Tienes un proyecto, una oportunidad laboral o simplemente quieres
            ponerte en contacto? Estaré encantado de conversar contigo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Información */}

          <div className="bg-[#161B22] rounded-2xl p-8 border border-gray-800">

            <h3 className="text-2xl font-bold mb-8">
              Información de contacto
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <MdEmail className="text-violet-400 text-2xl" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Correo
                  </p>

                  <a
                    href="mailto:jeffersondrako28@gmail.com"
                    className="hover:text-violet-400 transition"
                  >
                    jeffersondrako28@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-violet-400 text-2xl" />

                <div>
                  <p className="text-gray-400 text-sm">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/51970397656"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition"
                  >
                    +51 970 397 656
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MdLocationOn className="text-violet-400 text-2xl" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Ubicación
                  </p>

                  <p>Lima, Perú</p>
                </div>
              </div>

            </div>

            {/* Redes */}

            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/jeffersondrako28-creator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-violet-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/jefferson-añanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-violet-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:jeffersondrako28@gmail.com"
                className="text-3xl hover:text-violet-400 transition"
              >
                <MdEmail />
              </a>

              <a
                href="https://wa.me/51970397656"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-violet-500 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Formulario */}

          <form
            onSubmit={onSubmit}
            className="bg-[#161B22] rounded-2xl p-8 border border-gray-800"
          >

            {/* Protección anti-spam */}

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="w-full mb-5 p-4 rounded-lg bg-[#0D1117] border border-gray-700 outline-none focus:border-violet-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="w-full mb-5 p-4 rounded-lg bg-[#0D1117] border border-gray-700 outline-none focus:border-violet-500 transition"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Escribe tu mensaje..."
              required
              className="w-full p-4 rounded-lg bg-[#0D1117] border border-gray-700 outline-none resize-none focus:border-violet-500 transition"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-violet-600 hover:bg-violet-700 py-4 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>

            {result && (
              <p className="mt-5 text-center text-green-400">
                {result}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;