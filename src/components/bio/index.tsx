import { motion } from "framer-motion";
import { useState } from "react";

export default function Bio() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="flex justify-center items-center p-4 rounded-lg w-full bg-slate-900/60 cursor-pointer"
      animate={isExpanded ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        margin: 0,
        padding: "2rem",
        backgroundColor: "rgba(15, 23, 42, 0.95)"
      } : {
        position: "relative",
        zIndex: 1,
        margin: "1rem",
        padding: "1rem"
      }}
      onClick={toggleExpansion}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div 
        className="m-4 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent mb-10"
        whileHover={{ scale: 1 }}
      >
        <motion.section 
          className="rounded-2xl p-10 w-full border-2 z-10 border-solid border-red-500 transition-all duration-500 hover:shadow-red-600 shadow-xl text-sm"
          whileHover={{ scale: 1 }}
        >
            <h1 className="text-4xl font-bold text-center mb-6 z-0">Sobre mim</h1>
            <p className="leading-relaxed mb-4">
                Olá! Meu nome é <strong>Ismael Strey Pereira</strong>, sou desenvolvedor autodidata com uma longa jornada de aprendizado e prática desde 2009. Ao longo dos anos, venho me dedicando ao estudo e desenvolvimento de aplicações web utilizando tecnologias como <strong>PHP, HTML, CSS, JavaScript, TypeScript, Node.js, Ruby</strong> e <strong>MySQL</strong>, além de ferramentas modernas como <strong>React.js, Next.js, Prisma, React Query, TailwindCSS, Radix UI</strong> e <strong>Framer Motion</strong>.
            </p>
            <p className="leading-relaxed mb-4">
                Tenho um olhar especial para a criação de soluções que resolvem problemas reais do dia a dia. Entre meus projetos estão plataformas para controle e pedidos de viandas, sistemas de agendamento de diaristas e micro SaaS voltados a pequenos produtores rurais — todos pensados para serem <strong>fáceis de usar, acessíveis e com impacto direto na comunidade</strong>.
            </p>
            <p className="leading-relaxed mb-4">
                Gosto de trabalhar com <strong>designs modernos, responsivos e intuitivos</strong>, focando sempre na melhor experiência para o usuário. Também me interesso por metodologias ágeis e busco manter uma abordagem prática e objetiva no desenvolvimento de sistemas.
            </p>
            <p className="leading-relaxed mb-4">
                Além do universo da programação, tenho experiência com manutenção predial, incluindo pintura, elétrica, hidráulica, jardinagem e pequenos reparos. Isso me permite entender diferentes necessidades e pensar em soluções completas, inclusive para áreas fora do digital.
            </p>
            <p className="leading-relaxed">
                Mesmo com recursos limitados, nunca deixei de estudar e colocar projetos em prática. Acredito que a tecnologia pode transformar vidas — e estou aqui para fazer parte dessa transformação.
            </p>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}