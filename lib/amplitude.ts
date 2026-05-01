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
