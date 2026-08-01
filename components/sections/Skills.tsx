import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skillGroups = [
  {
    title: "FRONTEND",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "Framer Motion", icon: SiFramer, color: "text-blue-400" },
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss, color: "text-blue-500" },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
      { name: "Express", icon: SiExpress, color: "text-zinc-100" },
      { name: "API REST", icon: SiNextdotjs, color: "text-zinc-300" },
      { name: "Prisma", icon: SiPrisma, color: "text-sky-200" },
    ],
  },
  {
    title: "DATABASE",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
  {
    title: "OUTILS",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Docker", icon: SiDocker, color: "text-sky-400" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black px-6 py-24 text-white sm:px-10 lg:px-16"
      style={{
        backgroundColor: "#070211",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-mono text-sm tracking-[0.3em] text-emerald-300">
          MON STACK
        </p>

        <h2 className="font-heading text-4xl sm:text-5xl">
          Compétences <span className="text-emerald-300">techniques</span>
        </h2>

        <div className="mt-20 space-y-16">
          {skillGroups.map(({ title, skills }) => (
            <div
              key={title}
              className="grid gap-8 border-t border-white/5 pt-8 md:grid-cols-[180px_1fr] md:gap-14"
            >
              <h3 className="pt-1 text-lg font-bold tracking-wide text-zinc-400">
                {title}
              </h3>

              <ul className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
                {skills.map(({ name, icon: Icon, color }) => (
                  <li key={name}>
                    <div className="group flex items-center gap-3 text-zinc-100">
                      <Icon
                        aria-hidden="true"
                        className={`size-6 shrink-0 transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_currentColor] ${color}`}
                      />
                      <span className="text-base font-medium transition-colors duration-300 group-hover:text-emerald-200">
                        {name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
