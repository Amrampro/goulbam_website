"use client";

import { useEffect, useMemo, useState } from "react";
import { Cookie, X, CheckCircle2 } from "lucide-react";

type CookiePreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "goulbam_cookie_preferences";
const STORAGE_STATUS_KEY = "goulbam_cookie_preferences_saved";

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const savedStatus = localStorage.getItem(STORAGE_STATUS_KEY);
    const savedPreferences = localStorage.getItem(STORAGE_KEY);

    if (!savedStatus) {
      setIsOpen(true);
      setShowFloatingButton(false);
      return;
    }

    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences) as CookiePreferences;
        setPreferences({
          essential: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
        });
      } catch {
        setPreferences(defaultPreferences);
      }
    }

    setShowFloatingButton(true);
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpen);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpen);
    };
  }, []);

  const savePreferences = (nextPreferences: CookiePreferences) => {
    const normalized = {
      ...nextPreferences,
      essential: true,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    localStorage.setItem(STORAGE_STATUS_KEY, "true");

    setPreferences(normalized);
    setIsOpen(false);
    setShowFloatingButton(true);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const refuseOptional = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCurrentChoices = () => {
    savePreferences(preferences);
  };

  const cookieRows = useMemo(
    () => [
      {
        key: "essential" as const,
        title: "Cookies essentiels",
        description:
          "Nécessaires au bon fonctionnement du site (session, préférences, sécurité).",
        required: true,
      },
      {
        key: "analytics" as const,
        title: "Cookies analytiques",
        description:
          "Nous aident à comprendre comment les visiteurs utilisent le site et à améliorer l’expérience.",
        required: false,
      },
      {
        key: "marketing" as const,
        title: "Cookies marketing",
        description:
          "Utilisés pour des contenus personnalisés, campagnes ou mesures marketing si activés.",
        required: false,
      },
    ],
    []
  );

  return (
    <>
      {showFloatingButton ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-[60] inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#202B59] shadow-[0_18px_45px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.18)]"
        >
          <Cookie size={16} className="text-[#05A2DA]" />
          Gestion des cookies
        </button>
      ) : null}

      {isOpen ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#0B1026]/40 p-4 sm:items-center">
          <div className="w-full max-w-5xl rounded-[32px] border border-slate-200 bg-[#FAF8F4] shadow-[0_30px_80px_rgba(2,8,23,0.35)]">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-6 sm:px-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#05A2DA]/10 text-[#05A2DA]">
                  <Cookie size={22} />
                </div>

                <div>
                  <p className="text-xl font-bold text-[#202B59]">
                    Gestion des cookies
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#05A2DA]">
                    Conformité RGPD
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    Nous utilisons des cookies pour améliorer votre expérience de
                    navigation, analyser le trafic du site et personnaliser
                    certains contenus. Les cookies essentiels sont nécessaires au
                    bon fonctionnement du site. Vous pouvez accepter, refuser ou
                    personnaliser vos préférences.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-200/60 hover:text-slate-700"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 px-6 py-6 sm:px-8">
              {cookieRows.map((row) => {
                const checked = preferences[row.key];

                return (
                  <div
                    key={row.key}
                    className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-lg font-semibold text-[#202B59]">
                            {row.title}
                          </p>

                          {row.required ? (
                            <span className="rounded-full bg-[#05A2DA]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#05A2DA]">
                              Requis
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {row.description}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center">
                        {row.required ? (
                          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                            <CheckCircle2 size={16} />
                            Activé
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              setPreferences((prev) => ({
                                ...prev,
                                [row.key]: !prev[row.key],
                              }))
                            }
                            className={`relative h-8 w-14 rounded-full transition ${
                              checked ? "bg-[#05A2DA]" : "bg-slate-300"
                            }`}
                            aria-pressed={checked}
                          >
                            <span
                              className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition ${
                                checked ? "left-7" : "left-1"
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <button
                type="button"
                onClick={refuseOptional}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Refuser les cookies optionnels
              </button>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={saveCurrentChoices}
                  className="inline-flex items-center justify-center rounded-full border border-[#202B59]/15 bg-[#202B59]/5 px-5 py-3 text-sm font-semibold text-[#202B59] transition hover:bg-[#202B59]/10"
                >
                  Enregistrer mes choix
                </button>

                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#202B59]"
                >
                  Accepter tous les cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}