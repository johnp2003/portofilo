# 🚀 My Personal Portfolio

Welcome to my slice of the internet! This isn't just a pretty face—it's a high-performance, battle-tested React application backed by a **serious, production-grade DevOps pipeline**. 

If you're a recruiter, a fellow developer, or just someone who appreciates a good infrastructure diagram, you're in the right place! Grab a coffee ☕ and let's dive into how this was built.

---

## 🤯 The DevOps Architecture

Sure, I could have hosted this on Vercel or Netlify with one click, but where's the fun in that? I wanted full control, maximum performance, and a completely automated deployment cycle. 

The application lives on a **DigitalOcean VPS**, runs inside a highly optimized **Docker** container, and is turbocharged globally by **Cloudflare**. 

### 🗺️ The Architecture Map
```text
🌐 The Internet 
     ⬇️
☁️ Cloudflare CDN (Global Edge Caching & Anti-DDoS Shield)
     ⬇️
🛡️ Nginx (Reverse Proxy & Let's Encrypt SSL Termination)
     ⬇️
🐳 Docker Container (Multi-stage build, serving static files)
     ⬇️
💻 DigitalOcean VPS (Hardened Ubuntu Instance)
```

### 🛠️ The Tech Under the Hood

- **DigitalOcean VPS:** A dedicated Ubuntu instance. Locked down with SSH-key-only access and a strict UFW firewall because security is not a joke!
- **Docker & Docker Compose:** Containerization magic! I built a **multi-stage Dockerfile**. First, Node.js compiles the React app. Then, the heavy node modules are thrown away, and the built assets are handed off to a lightweight Alpine Nginx image. The result? A blazing fast, incredibly tiny container footprint. 
- **Nginx Reverse Proxy:** It doesn't just sit there; it works hard! I wrote a custom, highly optimized Nginx configuration that enables `gzip` compression (squishing file sizes by up to 80%), aggressively caches static assets for a whole year, and uses `try_files` to ensure React Router never throws a 404.
- **GitHub Actions (CI/CD):** Deploying manually? We don't do that here. Every push to the `main` branch triggers an automated deployment pipeline. A secure GitHub Action automatically SSHs into the server, pulls the latest code, and seamlessly rebuilds and restarts the Docker container. **Zero-downtime, fully automated deployments!** ⚡
- **Cloudflare & HTTPS:** Every byte is encrypted with Let's Encrypt (Certbot). Plus, Cloudflare's Edge CDN caches the site in hundreds of data centers globally. This means someone in Tokyo downloads the site just as instantly as someone in New York. 🌍

---

## 💻 Tech Stack Highlights
- **Frontend:** React, TypeScript, Vite (Because speed matters)
- **Styling:** Tailwind CSS, shadcn/ui (Because looking good matters)
- **DevOps:** Docker, Nginx, DigitalOcean, GitHub Actions, Cloudflare (Because I know my way around a server)

---

## 🎮 Want to run it locally?

### Option A: The Docker Way 🐳
Want to run the exact production environment on your local machine to see the magic? Easy.
```bash
docker compose up -d --build
```
Boom. Access the app at `http://localhost:3000`. 

### Option B: The Developer Way (Node.js) 🛠️
Just want to spin up the hot-reloading dev server to tweak some CSS? 
```bash
npm install
npm run dev
```
Start hacking away at `http://localhost:5173`.
