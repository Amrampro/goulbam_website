import Link from "next/link";
import { Mail, MessageCircle, Send, BriefcaseBusiness } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const contactCards = [
  {
    title: "Email principal",
    value: "contact@goulbam.com",
    href: "mailto:contact@goulbam.com",
    icon: Mail,
    description: "Pour les demandes professionnelles et collaborations.",
  },
  {
    title: "Email secondaire",
    value: "goulbam8@gmail.com",
    href: "mailto:goulbam8@gmail.com",
    icon: Send,
    description: "Pour toute autre prise de contact ou suivi.",
  },
  {
    title: "WhatsApp uniquement",
    value: "+237696896758",
    href: "https://wa.me/237696896758",
    icon: MessageCircle,
    description: "Disponible uniquement via WhatsApp pour les échanges directs.",
  },
  {
    title: "Type de demandes",
    value: "Projets, consulting, services, formation",
    href: "/services",
    icon: BriefcaseBusiness,
    description: "Découvrez les domaines sur lesquels nous pouvons vous accompagner.",
  },
];

export default function ContactDetailsSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Nos coordonnées
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Plusieurs moyens simples pour nous joindre
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Choisissez le canal le plus adapté à votre besoin. Nous restons
            disponibles pour les demandes sérieuses, les projets et les
            collaborations.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <AnimatedSection key={card.title} delay={index * 0.06}>
                <Link
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group block h-full rounded-[28px] border border-slate-200 bg-[#F8FBFF] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#05A2DA]/30 hover:shadow-[0_18px_45px_rgba(32,43,89,0.10)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#202B59]/5 text-[#05A2DA] transition group-hover:bg-[#05A2DA]/10">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#202B59]">
                    {card.title}
                  </h3>

                  <p className="mt-3 break-words text-sm font-medium text-[#05A2DA]">
                    {card.value}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}