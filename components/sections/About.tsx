import FadeIn from "../motion/FadeIn";

export default function AboutSection() {
  return (
    <FadeIn>
      <section
        id="about"
        className="
          px-6
          py-32
          bg-zinc-900
          text-white
        "
      >
        <h2 className="text-4xl font-bold">À propos</h2>

        <p className="mt-6 max-w-2xl text-zinc-400">
          Développeur spécialisé dans la création d'applications web et mobiles
          modernes.
        </p>
      </section>
    </FadeIn>
  );
}
