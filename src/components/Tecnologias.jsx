import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Tecnologias() {
  const frontend = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-6xl text-orange-500" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-6xl text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-6xl text-yellow-400" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-6xl text-cyan-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-6xl text-sky-400" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-6xl text-purple-500" />,
    },
  ];

  const backend = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-6xl text-green-500" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-6xl text-blue-300 " />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-6xl text-blue-500" />,
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-6xl text-orange-600" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-6xl text-white" />,
    },
    {
      name: "VS Code",
      icon: <VscVscode className="text-6xl text-blue-500" />,
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-6xl text-white" />,
    },
    {
      name: "Figma",
      icon: <FaFigma className="text-6xl text-pink-500" />,
    },
  ];

  const Card = ({ tech }) => (
    <div className="bg-[#161B22] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300">
      {tech.icon}
      <h3 className="mt-4 font-semibold text-lg">{tech.name}</h3>
    </div>
  );

  return (
    <section
      id="tecnologias"
      className="bg-[#09090B] text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-violet-400 font-semibold uppercase tracking-widest">
            Tecnologías
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Habilidades Técnicas
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Me especializo en el desarrollo Front-End con React y Tailwind CSS.
            Actualmente continúo fortaleciendo mis conocimientos en Back-End para desarrollar aplicaciones web completas y escalables.
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-violet-400">
          Front-End
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {frontend.map((tech) => (
            <Card key={tech.name} tech={tech} />
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-8 text-violet-400">
          Back-End (Aprendiendo)
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {backend.map((tech) => (
            <Card key={tech.name} tech={tech} />
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-8 text-violet-400">
          Herramientas
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tech) => (
            <Card key={tech.name} tech={tech} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Tecnologias;