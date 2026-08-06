import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "85895428-c166-4960-969a-dee5c7f44739"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ ¡Mensaje enviado correctamente!");
      event.target.reset();
    } else {
      setResult("❌ Ocurrió un error. Inténtalo nuevamente.");
    }
  };

  return (
    <section
      id="contacto"
      className="bg-[#09090B] text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-violet-400 font-semibold">
            Contacto
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Hablemos
          </h2>

          <p className="text-gray-400 mt-5">
            ¿Tienes un proyecto o una oportunidad laboral?
            Estaré encantado de conversar contigo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Información */}

          <div className="bg-[#161B22] rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Información
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-gray-400">Correo</p>

                <a
                  href="mailto:jeffersondrako28@gmail.com"
                  className="text-violet-400 hover:underline"
                >
                  jeffersondrako28@gmail.com
                </a>
              </div>

              <div>
                <p className="text-gray-400">Número</p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:underline"
                >
                  970 397 656
                </a>
              </div>

              <div>
                <p className="text-gray-400">
                  Ubicación
                </p>

                <p>Lima, Perú</p>
              </div>

            </div>

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
            className="bg-[#161B22] rounded-2xl p-8"
          >

            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="w-full mb-5 p-4 rounded-lg bg-[#0D1117] border border-gray-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo"
              required
              className="w-full mb-5 p-4 rounded-lg bg-[#0D1117] border border-gray-700"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Escribe tu mensaje..."
              required
              className="w-full p-4 rounded-lg bg-[#0D1117] border border-gray-700"
            ></textarea>

            <button
              className="w-full mt-6 bg-violet-600 hover:bg-violet-700 py-4 rounded-lg font-semibold transition"
            >
              Enviar mensaje
            </button>

            <p className="mt-5 text-center text-green-400">
              {result}
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;