import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://bea600bb6b723cc8d8166cc9ac900ca4@o4508206389657600.ingest.us.sentry.io/4508206413185024",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.browserTracingIntegration(),
  ],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,
  tracesSampleRate: 1.0,
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
