# TechFinds Consult Limited — website

React + Vite + Tailwind, fully static (no backend). Glassmorphism design with Framer Motion.

```
techfinds/
└── client/   React app (Vite, Tailwind, framer-motion, lucide-react)
```

## Run locally
```bash
npm run install:all     # installs client deps
npm run dev              # client on :5173
```

## Production
```bash
npm run build            # builds client/dist — deploy this folder to any static host
```

## Reservation form
`client/src/components/Reserve.jsx` submits directly to Web3Forms (client-side, no backend):
- Emails the submission to the desk team.
- Hands the submitter a pre-filled WhatsApp link to continue the conversation.

The Web3Forms access key lives in `client/src/data/site.js` (`web3formsKey`).

## Editing content
All copy, prices, tracks, images and contacts live in `client/src/data/site.js`.
