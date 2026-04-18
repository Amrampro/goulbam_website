import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  fullName: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

function getServiceLabel(service: string) {
  const serviceMap: Record<string, string> = {
    "developpement-web": "Développement web",
    "developpement-applicatif": "Développement applicatif",
    mobile: "Solutions mobiles",
    consulting: "Consulting & conseil",
    "marketing-digital": "Marketing digital",
    "design-graphique": "Design graphique",
    "conception-architecturale": "Conception architecturale",
    formation: "Nexium Institute / formation",
    autre: "Autre",
  };

  return serviceMap[service] ?? service;
}

function validatePayload(payload: ContactPayload) {
  if (!payload.fullName.trim()) {
    throw new Error("Le nom complet est obligatoire.");
  }

  if (!payload.email.trim()) {
    throw new Error("L’adresse email est obligatoire.");
  }

  if (!payload.message.trim()) {
    throw new Error("Le message est obligatoire.");
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    validatePayload(body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: String(process.env.SMTP_SECURE) === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const serviceLabel = body.service
      ? getServiceLabel(body.service)
      : "Non précisé";

    const mailTo = process.env.MAIL_TO || "goulbam8@gmail.com";
    const mailFromName = process.env.MAIL_FROM_NAME || "Site Web";
    const mailFromEmail = process.env.MAIL_FROM_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"${mailFromName}" <${mailFromEmail}>`,
      to: mailTo,
      replyTo: body.email,
      subject: `Nouveau message de - ${body.fullName}`,
      text: `
Nouveau message reçu depuis le formulaire de contact de goulbam.com :

Nom complet : ${body.fullName}
Email : ${body.email}
Entreprise / structure : ${body.company || "Non précisé"}
Service souhaité : ${serviceLabel}

Message :
${body.message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #0f172a;">
          <h2 style="color: #202B59; margin-bottom: 16px;">Nouvelle demande de contact</h2>

          <p><strong>Nom complet :</strong> ${body.fullName}</p>
          <p><strong>Email :</strong> ${body.email}</p>
          <p><strong>Entreprise / structure :</strong> ${body.company || "Non précisé"}</p>
          <p><strong>Service souhaité :</strong> ${serviceLabel}</p>

          <div style="margin-top: 20px;">
            <p><strong>Message :</strong></p>
            <div style="padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; white-space: pre-wrap;">
${body.message}
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Votre demande a été envoyée avec succès.",
    });
  } catch (error) {
    console.error("POST /api/contact error:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible d’envoyer votre demande.",
      },
      { status: 500 }
    );
  }
}