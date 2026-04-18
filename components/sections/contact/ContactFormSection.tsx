"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      setSuccess("Votre demande a bien été envoyée. Nous vous répondrons rapidement.");
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Impossible d’envoyer la demande.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F5FAFF] py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Formulaire de contact
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
              Décrivez-nous votre besoin
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Que ce soit pour un projet digital, une prestation, du consulting,
              une identité visuelle, du marketing digital, une conception ou
              une formation, vous pouvez nous laisser un message détaillé.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Réponse adaptée à votre besoin",
                "Approche professionnelle et structurée",
                "Ouverture aux projets, collaborations et demandes de devis",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-medium text-[#202B59]"
                    >
                      Nom complet
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#05A2DA] focus:ring-4 focus:ring-[#05A2DA]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#202B59]"
                    >
                      Adresse email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="vous@email.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#05A2DA] focus:ring-4 focus:ring-[#05A2DA]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-[#202B59]"
                    >
                      Entreprise / structure
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#05A2DA] focus:ring-4 focus:ring-[#05A2DA]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-[#202B59]"
                    >
                      Service souhaité
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#05A2DA] focus:ring-4 focus:ring-[#05A2DA]/10"
                    >
                      <option value="">Sélectionner un service</option>
                      <option value="developpement-web">Développement web</option>
                      <option value="developpement-applicatif">Développement applicatif</option>
                      <option value="mobile">Solutions mobiles</option>
                      <option value="consulting">Consulting & conseil</option>
                      <option value="marketing-digital">Marketing digital</option>
                      <option value="design-graphique">Design graphique</option>
                      <option value="conception-architecturale">Conception architecturale</option>
                      <option value="formation">Nexium Institute / formation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#202B59]"
                  >
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre besoin, votre projet ou votre demande..."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#05A2DA] focus:ring-4 focus:ring-[#05A2DA]/10"
                  />
                </div>

                {error ? (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
                    {error}
                  </div>
                ) : null}

                {success ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    {success}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(5,162,218,0.25)] transition hover:scale-[1.02] hover:bg-[#0294c8] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}