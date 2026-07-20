# Sneha Elev8r · Home Page (Next.js)

Elevator-first home page: call panel entry, door-opening reveal, live floor indicator, shaft rail navigation.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.jsx      Fonts (next/font: Archivo, Inter, IBM Plex Mono) + metadata
  page.jsx        Entry flow state + all floor sections (client component)
  globals.css     Full design system
components/
  Lobby.jsx       Call panel entry screen
  Doors.jsx       Elevator door transition
  Nav.jsx         Header with live floor pill
  ShaftRail.jsx   Right-edge scroll rail
  Logo.jsx        Brand mark SVG
```

## Before you ship

- Replace the placeholder phone number in `page.jsx` (search for `9000000000`)
- Swap the sample project names and stats for real ones
- Wire the Enquire Now buttons to your form or WhatsApp link
- Replace the CSS-gradient project facades with real photos when ready
  (keep the `.meta` overlay, just put an `<Image>` behind it)

## Notes

- The entry lobby shows on every load. To show it only once per visitor,
  gate it with a cookie or sessionStorage check inside `page.jsx`.
- The ding is generated with WebAudio, no sound files needed.
- Reduced motion is respected throughout.
