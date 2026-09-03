# yip---demo
Demo website for the Youth Impact Project

---

# Youth Impact Project — MVP Website

A responsive, front-end-only demo of the Youth Impact Project website, built to match
the brand established in the project proposal and pitch deck (navy / coral / aqua / gold,
Fraunces + Inter typefaces).

## What's included

- `index.html` — Home
- `about.html` — About (story, mission, values, team)
- `register.html` — Registration (free / supporter plan UI)
- `videos.html` — Video streaming & playlists (category filtering)
- `contact.html` — Contact form + info
- `css/style.css` — Shared design system (colors, type, components)
- `js/main.js` — Nav toggle, tab filtering, form demo states, animated stat counters

No build tools required — open `index.html` directly in a browser, or deploy the whole
folder as a static site (Netlify, Vercel, GitHub Pages all work as-is).

## What's real vs. placeholder in this MVP

**Real / working:**
- Fully responsive layout (mobile through desktop)
- Working navigation, mobile menu, video category tabs
- Client-side form validation and a demo "success" state on submit

**Placeholder (by design, for this proof-of-concept):**
- Registration and contact forms do not send data anywhere yet — no backend is wired up
- Video cards are styled placeholders, not live YouTube/Vimeo embeds
- Payment plan selector is UI-only — no live Paystack/Stripe integration
- Team photos use initials avatars instead of real photos

## Suggested next phase (per the original technical spec)

1. Stand up the backend: Node.js + Express, MongoDB/PostgreSQL, JWT auth
2. Wire the registration form to real user accounts + email confirmation
3. Connect Paystack for the recurring Supporter plan
4. Swap placeholder video cards for real YouTube/Vimeo API playlists
5. Deploy frontend to Netlify/Vercel, backend to Render/Railway/AWS, DNS to a real domain