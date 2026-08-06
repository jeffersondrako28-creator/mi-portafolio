import perfil from "../assets/images/perfil.jpeg";
function About() {
  return (
    <section
      id="sobre-mi"
      className="bg-[#0D1117] text-white py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="mb-16">

          <span className="text-violet-400 font-semibold">
            Conóceme
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Sobre mí
          </h2>

        </div>

       <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Texto */}
          <div>

            <p className="text-gray-300 text-lg leading-9">

              Soy <span className="text-violet-400 font-semibold">
                Jefferson Añanka Risco
              </span>, 
               estudiante de Ingeniería de Sistemas en la Universidad Tecnologica del Perú con 
               enfoque en el desarrollo Front-End. Me apasiona crear interfaces modernas, 
               responsivas y atractivas utilizando React, JavaScript, Tailwind CSS, HTML y CSS, 
               buscando siempre ofrecer una excelente experiencia al usuario.

            </p>

            <p className="text-gray-400 mt-8 leading-8">

              Mi objetivo es seguir creciendo como desarrollador Front-End,
              aprender nuevas tecnologías y participar en proyectos que
              aporten valor a las personas y a las empresas.

            </p>

            {/* Tarjetas */}

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="bg-[#161B22] rounded-xl p-6 border border-violet-500/10">

                <h3 className="text-violet-400 text-3xl font-bold">
                  6+
                </h3>

                <p className="text-gray-400 mt-2">
                  Tecnologías aprendidas
                </p>

              </div>

              <div className="bg-[#161B22] rounded-xl p-6 border border-violet-500/10">

                <h3 className="text-violet-400 text-3xl font-bold">
                  3+
                </h3>

                <p className="text-gray-400 mt-2">
                  Proyectos realizados
                </p>

              </div>

            </div>

          </div>

          {/* Imagen */}

          <div className="flex justify-center">

            <img
              src={perfil}
              alt="Jefferson"
              className="w-[380px] rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;