import cv from "../assets/pdf/cv.pdf";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-[#09090B] text-white flex items-center overflow-hidden"
    >
     <div className="max-w-5xl mx-auto px-8 w-full flex justify-center items-center text-center">

        {/* Texto */}
        <div className="max-w-3xl">

          <span className="text-violet-400 text-lg font-medium">
            Hola, soy
          </span>

          <h1 className="mt-4 text-6xl lg:text-7xl font-black leading-tight">
            Jefferson Daniel{" "}
            <span className="text-violet-500">
              Añanka Risco
            </span>
          </h1>

          {/* Botones */}

          <div className="flex justify-center flex-wrap gap-5 mt-10">

            <a
              href="#proyectos"
              className="px-8 py-4 rounded-xl border border-violet-500 text-white font-semibold hover:bg-violet-600 hover:border-violet-600 transition-all duration-300"
            >
              Ver Proyectos
            </a>

            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-violet-500 text-white font-semibold hover:bg-violet-600 transition-all duration-300"
            >
              Ver CV
            </a>

          </div>

          {/* Redes */}

          <div className="flex justify-center items-center gap-6 mt-12">

            <a
              href="https://github.com/jeffersondrako28-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-violet-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jefferson-añanka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-violet-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:jeffersondrako28@gmail.com"
              className="text-3xl text-gray-400 hover:text-violet-400 transition"
            >
              <MdEmail />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;