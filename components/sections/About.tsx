import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import FadeIn from "../motion/FadeIn";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/louis-cornu-183454259/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:Louiiis.cornu@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/Uncor-dev",
    icon: FaGithub,
  },
];

export default function AboutSection() {
  return (
    <FadeIn>
      <section
        id="about"
        className="flex min-h-screen items-center px-6 py-24 text-white sm:px-10 lg:px-16"
        style={{
          backgroundColor: "#070211",
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="group relative aspect-square w-full overflow-hidden">
            <img
              src="avatar-fermé.png"
              alt="Avatar de Louis Cornu"
              className="absolute inset-0 size-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-0"
            />

            <img
              src="avatar-ouvert.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-contain opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-4xl">
              Je suis <span className="text-emerald-300">Louis Cornu</span>, un
              développeur Full Stack qui crée des expériences web modernes et
              performantes.
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
              <p>
                Je conçois des applications web élégantes, accessibles et
                adaptées aux besoins réels des utilisateurs, du prototype au
                déploiement.
              </p>

              <p>
                Passionné par{" "}
                <span className="font-semibold text-emerald-300">
                  React, Next.js, TypeScript et Node.js
                </span>
                , j&apos;aime transformer des idées en interfaces fluides et en
                produits solides.
              </p>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white text-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.7)]"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>

            <a
              href="/cv-louis-cornu.pdf"
              download
              className="group mt-12 inline-flex items-center gap-3 rounded-full border-2 border-emerald-300 px-2 py-2 pr-6 font-medium text-white transition duration-300 hover:bg-emerald-300 hover:text-black hover:shadow-[0_0_35px_rgba(52,211,153,0.8)]"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-emerald-300 text-black transition-transform duration-300 group-hover:translate-y-1">
                <Download className="size-5" />
              </span>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
