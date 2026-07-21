// ==========================================================================
// Data
// ==========================================================================

const SKILLS = [
  {
    key: "backend",
    items: ["C#", ".NET", "JWT Authentication", "Swagger"],
  },
  {
    key: "frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "React",
      "Babel",
      "Vite",
    ],
  },
  { key: "database", items: ["Microsoft SQL Server", "SQLite", "MongoDB"] },
];

const PROJECTS = [
  {
    key: "honey",
    repo: "Honey Photo",
    url: "https://github.com/fazilmmmdzad/HoneyPhoto",
    tech: ["C#", ".Net Core", "Windows Forms"],
  },
  {
    key: "temp",
    repo: "Honey Degrees",
    url: "https://github.com/fazilmmmdzad/Temperature_Transducer",
    tech: ["C#", ".Net Framework", "Windows Forms"],
  },
  {
    key: "flight",
    repo: "Flight Booking",
    url: "https://github.com/fazilmmmdzad/FlightBooking",
    tech: ["C#", "HTML", "CSS", "JavaScript", "MVC", "MongoDB", "ML.NET"],
  },
];

const WORKFLOW_KEYS = ["schema", "backend", "interface", "refine"];
const FOCUS_KEYS = ["current", "philosophy", "learning"];

const TERMINAL_LINES = [
  "$ whoami",
  "fazil_memmedzade",
  "$ dotnet --version",
  "8.0.100",
  "$ cat stack.json",
  '{ "frontend": "React", "backend": "ASP.NET Core", "orm": "EF Core", "db": "MSSQL" }',
  "$ status",
  "building project...",
];

// ==========================================================================
// State
// ==========================================================================

let currentLang = "en";

// ==========================================================================
// i18n
// ==========================================================================

function getNested(obj, path) {
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = getNested(translations[lang], el.getAttribute("data-i18n"));
    if (typeof val === "string") el.textContent = val;
  });
  renderSkills(lang);
  renderProjects(lang);
  renderFocus(lang);
  renderWorkflow(lang);
  renderCertificates(lang);
  renderHeadline();
}

function renderSkills(lang) {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  const dict = translations[lang].skills.categories;
  grid.innerHTML = SKILLS.map(
    (cat, i) => `
    <div class="p-6 rounded-lg border card-hover reveal" style="--reveal-delay:${i * 70}; border-color:var(--border); background:var(--surface)">
      <h3 class="font-mono text-xs uppercase tracking-widest mb-4" style="color:var(--accent-bright)">${dict[cat.key]}</h3>
      <div class="flex flex-wrap gap-2">
        ${cat.items
          .map(
            (s) =>
              `<span class="skill-chip px-3 py-1.5 rounded-md text-xs font-mono">${s}</span>`,
          )
          .join("")}
      </div>
    </div>`,
  ).join("");
  observeReveals(grid.querySelectorAll(".reveal"));
}

function renderProjects(lang) {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  const dict = translations[lang].projects;
  grid.innerHTML = PROJECTS.map(
    (p, i) => `
    <a href="${p.url}" target="_blank" rel="noopener" class="tilt-card block p-6 rounded-lg border card-hover reveal" style="--reveal-delay:${i * 90}; border-color:var(--border); background:var(--surface)">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-display font-semibold text-lg">${dict[p.key].title}</h3>
        <svg class="w-4 h-4" style="color:var(--text-muted)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H8M17 7v9"/></svg>
      </div>
      <p class="text-sm mb-5" style="color:var(--text-muted)">${dict[p.key].desc}</p>
      <div class="flex flex-wrap gap-2">
        ${p.tech.map((t) => `<span class="px-2.5 py-1 rounded text-[11px] font-mono" style="background:var(--surface-2); color:var(--accent-bright)">${t}</span>`).join("")}
      </div>
    </a>`,
  ).join("");
  observeReveals(grid.querySelectorAll(".reveal"));
  initTilt(grid.querySelectorAll(".tilt-card"));
}

function renderFocus(lang) {
  const grid = document.getElementById("focusGrid");
  if (!grid) return;
  const dict = translations[lang].focus.cards;
  grid.innerHTML = FOCUS_KEYS.map(
    (key, i) => `
    <div class="tilt-card p-6 rounded-lg border card-hover reveal" style="--reveal-delay:${i * 90}; border-color:var(--border); background:var(--surface)">
      <p class="font-mono text-xs mb-3 focus-num" style="color:var(--accent-bright)">0${i + 1}</p>
      <h3 class="font-display font-semibold text-lg mb-3">${dict[key].title}</h3>
      <p class="text-sm leading-relaxed" style="color:var(--text-muted)">${dict[key].desc}</p>
    </div>`,
  ).join("");
  observeReveals(grid.querySelectorAll(".reveal"));
  initTilt(grid.querySelectorAll(".tilt-card"));
}

function renderWorkflow(lang) {
  const list = document.getElementById("workflowList");
  if (!list) return;
  const dict = translations[lang].focus.workflow;
  list.innerHTML = WORKFLOW_KEYS.map(
    (key, i) => `
    <div class="flex gap-5 reveal" style="--reveal-delay:${i * 90}">
      <div class="flex flex-col items-center">
        <div class="step-num">0${i + 1}</div>
        ${i < WORKFLOW_KEYS.length - 1 ? '<div class="step-line w-px flex-1 my-2"></div>' : ""}
      </div>
      <div class="pb-8">
        <h4 class="font-display font-semibold text-base mb-1.5">${dict[key].title}</h4>
        <p class="text-sm leading-relaxed max-w-md" style="color:var(--text-muted)">${dict[key].desc}</p>
      </div>
    </div>`,
  ).join("");
  observeReveals(list.querySelectorAll(".reveal"));
}

function renderHeadline() {
  const el = document.getElementById("heroName");
  if (!el) return;
  const text = el.getAttribute("data-text") || el.textContent;
  el.setAttribute("data-text", text);
  el.innerHTML = "";
  let i = 0;
  [...text].forEach((ch) => {
    if (ch === "\n") {
      el.appendChild(document.createElement("br"));
      return;
    }
    const span = document.createElement("span");
    span.className = "char";
    span.style.setProperty("--i", i++);
    span.textContent = ch;
    el.appendChild(span);
  });
}

// ==========================================================================
// Theme
// ==========================================================================

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document
    .getElementById("themeIconDark")
    .classList.toggle("hidden", theme === "light");
  document
    .getElementById("themeIconLight")
    .classList.toggle("hidden", theme !== "light");
}

// ==========================================================================
// Reveal on scroll (stagger-aware)
// ==========================================================================

function observeReveals(nodeList) {
  nodeList.forEach((el) => revealObserver.observe(el));
}
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);

// ==========================================================================
// Custom cursor — interpolated trailing motion
// ==========================================================================

function initCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const glow = document.getElementById("cursorGlow");
  if (!dot || !ring || !glow) return;

  let mx = window.innerWidth / 2,
    my = window.innerHeight / 2;
  let rx = mx,
    ry = my,
    gx = mx,
    gy = my;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    document.body.classList.add("cursor-active");
  });
  window.addEventListener("mouseleave", () =>
    document.body.classList.remove("cursor-active"),
  );
  window.addEventListener("mousedown", () => ring.classList.add("is-down"));
  window.addEventListener("mouseup", () => ring.classList.remove("is-down"));

  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    gx += (mx - gx) * 0.08;
    gy += (my - gy) * 0.08;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  }
  loop();

  const refreshTargets = () => {
    document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ring.classList.add("is-hover");
        dot.classList.add("is-hover");
      });
      el.addEventListener("mouseleave", () => {
        ring.classList.remove("is-hover");
        dot.classList.remove("is-hover");
      });
    });
  };
  refreshTargets();
  document.addEventListener("content:rendered", refreshTargets);
}

// ==========================================================================
// Magnetic buttons
// ==========================================================================

function initMagnetic() {
  document.querySelectorAll(".magnetic").forEach((wrap) => {
    const inner = wrap.firstElementChild;
    if (!inner) return;
    wrap.addEventListener("mousemove", (e) => {
      const rect = wrap.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      inner.style.transform = `translate(${relX * 0.3}px, ${relY * 0.4}px)`;
    });
    wrap.addEventListener("mouseleave", () => {
      inner.style.transform = "translate(0,0)";
    });
  });
}

// ==========================================================================
// Tilt cards
// ==========================================================================

function initTilt(nodeList) {
  (nodeList || document.querySelectorAll(".tilt-card")).forEach((card) => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = "1";
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg) translateY(-4px)`;
      card.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
      card.style.setProperty("--my", `${(py + 0.5) * 100}%`);
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// ==========================================================================
// Parallax blobs
// ==========================================================================

function initBlobs() {
  const blobs = document.querySelectorAll(".blob");
  if (!blobs.length) return;
  window.addEventListener("mousemove", (e) => {
    const cx = (e.clientX / window.innerWidth - 0.5) * 2;
    const cy = (e.clientY / window.innerHeight - 0.5) * 2;
    blobs.forEach((b, i) => {
      const factor = (i + 1) * 10;
      b.style.transform = `translate(${cx * factor}px, ${cy * factor}px)`;
    });
  });
}

// ==========================================================================
// Scroll progress
// ==========================================================================

function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = scrolled + "%";
      ticking = false;
    });
  });
}

// ==========================================================================
// Init
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  setTheme("dark");
  applyTranslations(currentLang);
  document.getElementById("year").textContent = new Date().getFullYear();

  document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "az" : "en";
    applyTranslations(currentLang);
    startTyping();
    document.dispatchEvent(new Event("content:rendered"));
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    const isLight =
      document.documentElement.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
  });

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    }),
  );

  observeReveals(document.querySelectorAll(".reveal"));

  const sections = ["home", "about", "skills", "projects", "focus", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = document.querySelectorAll(".nav-link");
  const navIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) =>
            l.classList.toggle(
              "active",
              l.getAttribute("href") === `#${entry.target.id}`,
            ),
          );
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );
  sections.forEach((s) => navIO.observe(s));

  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  });
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  initCursor();
  initMagnetic();
  initBlobs();
  initScrollProgress();

  typeTerminal();
  startTyping();
  initNetwork();

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('input[name="name"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:fazilmmmdzad48@gmail.com?subject=${subject}&body=${body}`;
  });
});

// ==========================================================================
// Hero role typing animation
// ==========================================================================

let typingTimeout;
function startTyping() {
  clearTimeout(typingTimeout);
  const el = document.getElementById("typedRole");
  const roles = translations[currentLang].hero.roles;
  let roleIndex = 0,
    charIndex = 0,
    deleting = false;

  function tick() {
    const word = roles[roleIndex];
    el.textContent = deleting
      ? word.slice(0, charIndex--)
      : word.slice(0, charIndex++);
    let delay = deleting ? 35 : 60;

    if (!deleting && charIndex === word.length + 1) {
      deleting = true;
      delay = 1400;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 300;
    }
    typingTimeout = setTimeout(tick, delay);
  }
  tick();
}

// ==========================================================================
// Terminal lines animation
// ==========================================================================

function typeTerminal() {
  const body = document.getElementById("termBody");
  body.innerHTML = "";
  let i = 0;
  function next() {
    if (i >= TERMINAL_LINES.length) return;
    const line = document.createElement("div");
    line.className = "term-line";
    const isCommand = TERMINAL_LINES[i].startsWith("$");
    line.style.color = isCommand ? "var(--text)" : "var(--accent-bright)";
    body.appendChild(line);
    let c = 0;
    const text = TERMINAL_LINES[i];
    const iv = setInterval(() => {
      line.textContent = text.slice(0, c++);
      if (c > text.length) {
        clearInterval(iv);
        i++;
        setTimeout(next, 380);
      }
    }, 22);
  }
  next();
}

// ==========================================================================
// Network canvas
// ==========================================================================

function initNetwork() {
  const canvas = document.getElementById("netCanvas");
  const ctx = canvas.getContext("2d");
  const hero = canvas.parentElement;
  let w, h, points;

  function resize() {
    w = canvas.width = hero.clientWidth;
    h = canvas.height = hero.clientHeight;
    const count = Math.floor((w * h) / 28000);
    points = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    points.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    });
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x,
          dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.strokeStyle = `rgba(79,227,154,${1 - dist / 130})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = "rgba(79,227,154,0.7)";
      ctx.beginPath();
      ctx.arc(points[i].x, points[i].y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

// ==========================================================================
// Certificates
// ==========================================================================

const CERTIFICATES = [
  { key: "aspnet",   image: "./AspDotNetCertificate.png" },
  { key: "csharp",   image: "./CsCertificate.png" },
  { key: "frontend", image: "./HtmlCssJsCertificate.png" },
];

function renderCertificates(lang) {
  const grid = document.getElementById("certificatesGrid");
  if (!grid) return;
  const dict = translations[lang].certificates;
  grid.innerHTML = CERTIFICATES.map(
    (c, i) => `
    <a href="${c.image}" target="_blank" rel="noopener"
       class="cert-card reveal"
       style="--reveal-delay:${i * 80}"
       aria-label="${dict[c.key].title}">
      <div class="cert-card__media">
        <img class="cert-card__img" src="${c.image}" alt="${dict[c.key].title}" loading="lazy" />
      </div>
      <div class="cert-card__body">
        <span class="cert-card__provider">${dict[c.key].provider}</span>
        <h3 class="cert-card__title">${dict[c.key].title}</h3>
        <p class="cert-card__desc">${dict[c.key].description}</p>
        <span class="cert-card__date">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
          ${dict[c.key].date}
        </span>
      </div>
    </a>`,
  ).join("");
  observeReveals(grid.querySelectorAll(".reveal"));
  document.dispatchEvent(new Event("content:rendered"));
}
