// sentry.client.config.ts
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://2f6fe19758fc3b72852e5a983d570fd6@o4509612845367296.ingest.us.sentry.io/4509613000097792',
  tracesSampleRate: 0.5, // Adjust for performance monitoring

  //integrations: [
    //Sentry.replayIntegration(),
 // ],
  // Session Replay
  //replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  //replaysOnErrorSampleRate: 1.0, 
});
