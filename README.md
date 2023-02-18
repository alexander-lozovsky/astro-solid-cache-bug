# Astro+Solid bug with http cache

```bash
# node v18.14.1 npm v9.3.1
npm ci
npm run build
npm start
```

- Open http://localhost:8080/ in **Safari**
- Observe "Hello world 1" and "Hello world 2" being rendered on the page
- Refresh the page
- Observe only "Hello world 1" being rendered

`server.mjs` has http cache for static files configured, and I'm trying to use two Solid islands nested into each other. It looks like when you add http cache, some race condition happens between Astro running hydration and the page rendering
