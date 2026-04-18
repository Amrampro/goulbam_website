import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Politique de confidentialité"
      updatedAt="18 Avril 2026"
    >
      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          1. Responsable du traitement
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
          2. Données collectées
        </h2>
        <p className="mt-4">
          Nous pouvons collecter certaines données personnelles lorsque vous
          utilisez nos formulaires ou interagissez avec notre site, notamment :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone</li>
          <li>Nom de société ou organisation</li>
          <li>Objet de la demande</li>
          <li>Contenu du message</li>
          <li>Données techniques de navigation si des outils analytiques sont activés</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          3. Finalité du traitement
        </h2>
        <p className="mt-4">
          Les données personnelles collectées sont utilisées exclusivement pour :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Répondre à vos demandes de contact</li>
          <li>Assurer le suivi de votre demande ou de votre projet</li>
          <li>Vous envoyer des échanges utiles liés à votre prise de contact</li>
          <li>Améliorer l’expérience utilisateur du site</li>
          <li>Mesurer l’audience du site si vous y consentez</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">4. Base légale</h2>
        <p className="mt-4">
          Le traitement de vos données repose selon les cas sur :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Votre consentement explicite, notamment via l’envoi d’un formulaire</li>
          <li>Notre intérêt légitime à répondre à vos demandes et sécuriser le site</li>
          <li>Le respect de certaines obligations légales lorsque cela s’applique</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          5. Durée de conservation
        </h2>
        <p className="mt-4">
          Vos données sont conservées pendant une durée proportionnée à la
          finalité du traitement. Les données liées aux formulaires de contact
          peuvent être conservées pendant une durée maximale de 36 mois à compter
          du dernier échange, sauf obligation légale contraire.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          6. Partage des données
        </h2>
        <p className="mt-4">
          Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à des
          fins commerciales. Elles peuvent toutefois être traitées par des
          prestataires techniques intervenant dans l’hébergement, l’envoi
          d’e-mails, la sécurité ou la maintenance, uniquement dans le cadre de
          l’exécution du service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">7. Cookies</h2>
        <p className="mt-4">
          Notre site utilise des cookies essentiels nécessaires au bon
          fonctionnement du site. Avec votre consentement, nous pouvons également
          utiliser des cookies analytiques ou marketing afin de mieux comprendre
          l’usage du site et améliorer nos contenus.
        </p>
        <p className="mt-4">
          Vous pouvez accepter, refuser ou personnaliser vos préférences à tout
          moment via notre module de gestion des cookies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">
          7 bis. Google reCAPTCHA
        </h2>
        <p className="mt-4">
          Nos formulaires peuvent utiliser Google reCAPTCHA afin de protéger le
          site contre les soumissions automatisées et les abus.
        </p>
        <p className="mt-4">
          reCAPTCHA peut analyser certains éléments techniques et comportementaux
          liés à l’utilisation du site afin de distinguer un utilisateur humain
          d’un robot. Les données traitées dans ce cadre relèvent également des
          politiques de Google.
        </p>
        <p className="mt-4">
          L’utilisation de reCAPTCHA repose sur notre intérêt légitime à
          sécuriser le site et à éviter les abus automatisés.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">8. Vos droits</h2>
        <p className="mt-4">
          Conformément à la réglementation applicable, vous disposez notamment des
          droits suivants :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Droit d’accès à vos données personnelles</li>
          <li>Droit de rectification</li>
          <li>Droit à l’effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit d’opposition</li>
          <li>Droit de retirer votre consentement lorsque le traitement repose sur celui-ci</li>
        </ul>
        <p className="mt-4">
          Pour exercer vos droits, vous pouvez nous écrire à :{" "}
          <u><i><a
            href="mailto:contact@goulbam.com"
            className="font-medium text-[#05A2DA] hover:underline"
          >
            contact@goulbam.com
          </a></i></u>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">9. Sécurité</h2>
        <p className="mt-4">
          Nous mettons en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données contre tout accès non autorisé,
          perte, altération, divulgation ou destruction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#202B59]">10. Contact</h2>
        <p className="mt-4">
          Pour toute question relative à cette politique de confidentialité,
          vous pouvez nous contacter à :{" "}
          <u><i><a
            href="mailto:contact@goulbam.com"
            className="font-medium text-[#05A2DA] hover:underline"
          >
            contact@goulbam.com
          </a></i></u>
        </p>
      </section>
    </LegalPageLayout>
  );
}