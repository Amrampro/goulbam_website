import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function LegalNoticePage() {
  return (
    <LegalPageLayout
      title="Mentions légales"
      updatedAt="18 Avril 2026"
    >
      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          1. Éditeur du site
        </h2>
        <div className="mt-4 space-y-1">
          <p className="font-semibold text-[#202B59]">GoulBAM Enterprises</p>
          <p>
            Entreprise spécialisée en développement digital, solutions web et
            mobile, consulting, design, accompagnement stratégique et formation.
          </p>
          <p>
            Email :{" "}
            <u><i><a
              href="mailto:contact@goulbam.com"
              className="font-medium text-[#05A2DA] hover:underline"
            >
              contact@goulbam.com
            </a></i></u>
          </p>
          <p>
            Site :{" "}
            <u><i><a
              href="https://www.goulbam.com"
              className="font-medium text-[#05A2DA] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              www.goulbam.com
            </a></i></u>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          2. Directeur de la publication
        </h2>
        <p className="mt-4">
          Le directeur de la publication est le représentant légal de
          GoulBAM Enterprises.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          3. Hébergement
        </h2>
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-semibold text-[#202B59]">Gestion DNS / Hébergement</p>
            <p>Le site est hébergé sur les infrastructures d’OVH SAS.</p>
            <p>Adresse : 2 rue Kellermann, 59100 Roubaix, France</p>
            <p>
              Site :{" "}
              <u><i><a
                href="https://www.ovh.com"
                className="font-medium text-[#05A2DA] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                www.ovh.com
              </a></i></u>
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#202B59]">Nom de domaine</p>
            <p>Le nom de domaine est enregistré et géré auprès du registrar LWS (Ligne Web Services).</p>
            <p>Adresse : 10, rue Penthièvre, 75008 Paris, France</p>
            <p>
              Site :{" "}
              <u><i><a
                href="https://www.lws.fr"
                className="font-medium text-[#05A2DA] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                www.lws.fr
              </a></i></u>
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          4. Propriété intellectuelle
        </h2>
        <p className="mt-4">
          L’ensemble des contenus présents sur ce site, y compris les textes,
          visuels, éléments graphiques, logos, icônes, illustrations, vidéos,
          compositions, structures et éléments techniques, est protégé par les
          règles applicables en matière de propriété intellectuelle.
        </p>
        <p className="mt-4">
          Sauf mention contraire, ces éléments sont la propriété exclusive de
          GoulBAM Enterprises. Toute reproduction, représentation, modification,
          adaptation, republication ou exploitation, totale ou partielle, sans
          autorisation écrite préalable, est interdite.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          5. Limitation de responsabilité
        </h2>
        <p className="mt-4">
          GoulBAM Enterprises s’efforce de fournir sur ce site des informations
          aussi précises et à jour que possible. Toutefois, l’entreprise ne peut
          garantir l’absence totale d’erreurs, d’omissions ou d’éventuelles
          imprécisions.
        </p>
        <p className="mt-4">
          GoulBAM Enterprises ne pourra être tenue responsable de tout dommage
          direct ou indirect résultant de l’accès au site, de son utilisation ou
          de l’impossibilité de l’utiliser.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          6. Données personnelles
        </h2>
        <p className="mt-4">
          Pour toute information relative à la collecte, l’utilisation et la
          protection de vos données personnelles, veuillez consulter notre{" "}
          <Link
            href="/politique-confidentialite"
            className="font-medium text-[#05A2DA] hover:underline"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">7. Cookies</h2>
        <p className="mt-4">
          Ce site peut utiliser des cookies ou technologies similaires afin
          d’améliorer l’expérience utilisateur, mesurer l’audience, sécuriser le
          site et personnaliser certains contenus.
        </p>
        <p className="mt-4">
          Pour en savoir plus ou gérer vos préférences, veuillez consulter notre{" "}
          <Link
            href="/politique-confidentialite"
            className="font-medium text-[#05A2DA] hover:underline"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          8. Droit applicable
        </h2>
        <p className="mt-4">
          Les présentes mentions légales sont soumises au droit applicable au
          siège social de GoulBAM Enterprises. Tout litige relatif à
          l’utilisation du site relèvera de la compétence des juridictions
          compétentes, sauf disposition légale impérative contraire.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">9. Contact</h2>
        <p className="mt-4">
          Pour toute question concernant les présentes mentions légales, vous
          pouvez nous contacter à l’adresse suivante :{" "}
          <a
            href="mailto:contact@goulbam.com"
            className="font-medium text-[#05A2DA] hover:underline"
          >
            contact@goulbam.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
}