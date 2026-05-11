"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Github,
  Layers3,
  Linkedin,
  MapPin,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { userTypes } from "@/@types/userTypes";
import { infoUserGitHub } from "@/lib/apiGit";

const projects = [
  {
    name: "speedtiketai",
    type: "Micro SaaS",
    description:
      "Solução para criação e organização de tickets em formato kanban, pensada para times pequenos que precisam de agilidade.",
    stack: ["Next.js", "TypeScript", "Kanban", "Automação"],
    accent: "from-fuchsia-500 via-rose-500 to-orange-400",
    href: "https://github.com/ismaelstrey",
  },
  {
    name: "mulherescontabil",
    type: "Site institucional",
    description:
      "Projeto para apresentar serviços contábeis com linguagem acessível, visual profissional e foco em conversão.",
    stack: ["React", "Tailwind", "UX", "Responsivo"],
    accent: "from-cyan-400 via-blue-500 to-violet-500",
    href: "https://github.com/ismaelstrey",
  },
  {
    name: "speedtiket",
    type: "Sistema web",
    description:
      "Experimento em JavaScript para atendimento, registro de chamados e acompanhamento de solicitações.",
    stack: ["JavaScript", "Node.js", "API", "Dashboard"],
    accent: "from-lime-300 via-emerald-400 to-teal-500",
    href: "https://github.com/ismaelstrey",
  },
  {
    name: "Projetos comunitários",
    type: "Produtos locais",
    description:
      "Ideias para viandas, diaristas e produtores rurais, sempre com foco em resolver problemas reais da comunidade.",
    stack: ["Produto", "Pesquisa", "Next.js", "MySQL"],
    accent: "from-amber-300 via-orange-500 to-red-500",
    href: "https://github.com/ismaelstrey",
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "MySQL",
  "TailwindCSS",
  "Prisma",
  "Framer Motion",
];

const plan = [
  {
    title: "Entrada marcante",
    text: "Hero com avatar do GitHub, CTA direto, fundo em gradiente vibrante e microinterações para criar impacto logo no primeiro scroll.",
  },
  {
    title: "Projetos como produtos",
    text: "Cards com problema resolvido, stack, estado do projeto e links. A ideia é mostrar raciocínio de produto, não apenas lista de repositórios.",
  },
  {
    title: "Narrativa pessoal",
    text: "Uma seção curta sobre formação em TI, atuação como Analista de redes, autodidatismo e construção de soluções úteis para pessoas reais.",
  },
  {
    title: "Evolução contínua",
    text: "Espaço para roadmap, próximos estudos, melhorias e projetos em andamento, mantendo o portfólio vivo.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [usuario, setUsuario] = useState<userTypes | null>(null);

  useEffect(() => {
    infoUserGitHub().then((user) => {
      if (user) {
        setUsuario(user as userTypes);
      }
    });
  }, []);

  const profileName = usuario?.name || "Ismael Strey Pereira";
  const profileBio =
    "Formado Tecnologia da Informação em 2013. Gosto de estudar programação nos meus tempos livres. Trabalho como Analista de redes em uma empresa do setor de Telecom.";

  const stats = useMemo(
    () => [
      { label: "Projetos destacados", value: "04+" },
      { label: "Stack principal", value: "Next.js" },
      { label: "Repositórios públicos", value: usuario?.public_repos || "GitHub" },
    ],
    [usuario?.public_repos]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#090814] text-white">
      <section className="relative flex min-h-screen items-center px-5 py-24 sm:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.38),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.28),transparent_28%),linear-gradient(135deg,#090814_0%,#171032_46%,#071318_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        <motion.div
          className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#090814] to-transparent"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Portfólio pessoal em evolução
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
                {profileName}
                <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent">
                  código com impacto real.
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                {profileBio} Transformo ideias em interfaces responsivas,
                sistemas úteis e produtos digitais com energia visual.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-2xl shadow-white/20 transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                Ver projetos <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/ismaelstrey"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-fuchsia-300 hover:bg-fuchsia-400/20"
              >
                <Github className="h-4 w-4" />
                GitHub principal
              </Link>
              <Link
                href="https://www.linkedin.com/in/ismaelstrey/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/20"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 opacity-80 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-start gap-5">
                {usuario?.avatar_url ? (
                  <Image
                    src={usuario.avatar_url}
                    alt={profileName}
                    width={112}
                    height={112}
                    priority
                    className="h-28 w-28 rounded-2xl border border-white/20 object-cover"
                  />
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white/10">
                    <Code2 className="h-10 w-10 text-cyan-200" />
                  </div>
                )}
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                    Dev Profile
                  </p>
                  <h2 className="text-2xl font-black">{profileName}</h2>
                  {usuario?.location && (
                    <p className="flex items-center gap-2 text-sm text-slate-300">
                      <MapPin className="h-4 w-4 text-fuchsia-300" />
                      {usuario.location}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                  >
                    <strong className="block text-2xl text-white">{item.value}</strong>
                    <span className="mt-1 block text-xs text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm leading-7 text-cyan-50">
                  Foco: construir produtos digitais modernos, com visual forte,
                  usabilidade simples e código pronto para crescer.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="projetos" className="relative px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">
                <Rocket className="h-4 w-4" />
                Projetos
              </p>
              <h2 className="max-w-3xl text-4xl font-black sm:text-6xl">
                Uma vitrine com cara de produto, movimento e personalidade.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              Cada projeto ganha contexto: o problema, a solução, a stack e o
              próximo passo. Isso deixa o portfólio mais forte que uma simples
              lista de links.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/25"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`}
                />
                <div
                  className={`mb-8 h-40 rounded-2xl bg-gradient-to-br ${project.accent} p-px shadow-2xl shadow-black/30`}
                >
                  <div className="flex h-full items-end rounded-2xl bg-slate-950/45 p-5">
                    <div>
                      <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                        {project.type}
                      </span>
                      <h3 className="mt-4 text-3xl font-black">{project.name}</h3>
                    </div>
                  </div>
                </div>
                <p className="min-h-24 text-base leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.href}
                  target="_blank"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition group-hover:text-white"
                >
                  Abrir no GitHub <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              <Layers3 className="h-4 w-4" />
              Stack
            </p>
            <h2 className="text-4xl font-black">Ferramentas que dão ritmo ao produto.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              A base já usa Next.js, TailwindCSS, Framer Motion e componentes
              reutilizáveis. O próximo salto é organizar os projetos como dados
              e evoluir a experiência com filtros, detalhes e métricas.
            </p>
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 text-sm font-bold text-slate-100 backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
              <Zap className="h-4 w-4" />
              Planejamento
            </p>
            <h2 className="text-4xl font-black sm:text-6xl">
              Próximos passos para deixar o portfólio memorável.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {plan.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-6 backdrop-blur-xl"
              >
                <span className="text-sm font-black text-cyan-200">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">
              Vamos construir?
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Ideias simples podem virar produtos incríveis.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://github.com/ismaelstrey"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/ismaelstrey/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
