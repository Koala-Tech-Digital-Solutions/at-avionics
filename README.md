# A&T Avionics Site

React + Vite marketing site with a **frontend-only** contact / quote request form.

## Run locally

```bash
npm install
npm run dev
```

## Contact form (no backend required)

The quote request form on `/contact` submits directly to a hosted form provider.

### Option A (recommended): Formspree

- Create a form in Formspree and copy your endpoint URL (looks like `https://formspree.io/f/xxxxxxx`).
- Create a `.env` file in the project root (same folder as `package.json`) and set:

```bash
VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/REPLACE_ME"
```

- Restart `npm run dev`.

If the endpoint isn’t configured yet, the page shows a warning and provides an **Email Instead** fallback button.

### Option B: Netlify Forms (if you deploy on Netlify)

If you want, we can switch the form to Netlify Forms so submissions show up in your Netlify dashboard — still no custom backend.

# at-avionics
