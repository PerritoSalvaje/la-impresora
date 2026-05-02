'use client';

import * as amplitude from '@amplitude/analytics-browser';

const API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || '44d04a7b15ffc6df69f158ebef95f71e';

let initialized = false;

export function initAmplitude() {
  if (initialized || typeof window === 'undefined') return;
  amplitude.init(API_KEY, {
    defaultTracking: {
      pageViews: true,
      sessions: true,
      formInteractions: true,
      fileDownloads: true,
    },
    serverUrl: undefined,
  });
  initialized = true;
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  amplitude.track(event, properties);
}

export function identify(userId: string, traits?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  amplitude.setUserId(userId);
  if (traits) {
    const identifyEvent = new amplitude.Identify();
    Object.entries(traits).forEach(([key, value]) => {
      identifyEvent.set(key, value as amplitude.Types.ValidPropertyType);
    });
    amplitude.identify(identifyEvent);
  }
}

export function reset() {
  amplitude.reset();
}

// ── Eventos canónicos del negocio ────────────────────────────────────────
// Usar estos helpers en lugar de `track()` directo para mantener consistencia
// y poder cambiar la implementación (Amplitude → Mixpanel → server-side) sin
// tocar todos los componentes.

export const events = {
  newsletterSignup: (source: string, ref?: string) =>
    track("Newsletter Signup", { source, ref, ts: Date.now() }),

  newsletterSignupSuccess: (source: string, ref?: string) =>
    track("Newsletter Signup Success", { source, ref, ts: Date.now() }),

  leadMagnetUnlock: (magnet: string) =>
    track("Lead Magnet Unlocked", { magnet, ts: Date.now() }),

  ctaClick: (cta: string, location: string) =>
    track("CTA Clicked", { cta, location, ts: Date.now() }),

  pricingTierViewed: (tier: string) =>
    track("Pricing Tier Viewed", { tier, ts: Date.now() }),

  checkoutStarted: (product: string, price: number) =>
    track("Checkout Started", { product, price, ts: Date.now() }),

  exitIntentShown: () => track("Exit Intent Shown"),
  exitIntentSubscribed: () => track("Exit Intent Subscribed"),

  stickyMobileShown: () => track("Sticky Mobile Shown"),
  stickyMobileSubscribed: () => track("Sticky Mobile Subscribed"),

  referralLinkGenerated: (refCode: string) =>
    track("Referral Link Generated", { refCode }),

  referralLinkShared: (channel: "whatsapp" | "twitter" | "telegram" | "email") =>
    track("Referral Link Shared", { channel }),

  guiaPdfDownload: (page: string) =>
    track("Guia PDF Downloaded", { page }),

  dolarizacionCalc: (pais: string, monto: number, meses: number) =>
    track("Dolarizacion Calculated", { pais, monto, meses }),
};
