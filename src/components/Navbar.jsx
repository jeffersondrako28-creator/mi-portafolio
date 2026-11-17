function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#09090B]/80 backdrop-blur-md border-b border-violet-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-20">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-violet-500">
          Ingeniero de Sistemas
        </h1>

        {/* Menú */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          <li>
            <a
              href="#inicio"
              className="hover:text-violet-400 transition duration-300"
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#sobre-mi"
              className="hover:text-violet-400 transition duration-300"
            >
              Sobre mí
            </a>
          </li>

          <li>
            <a
              href="#tecnologias"
              className="hover:text-violet-400 transition duration-300"
            >
              Tecnologias
            </a>
          </li>

          <li>
            <a
              href="#proyectos"
              className="hover:text-violet-400 transition duration-300"
            >
              Proyectos
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              className="hover:text-violet-400 transition duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;