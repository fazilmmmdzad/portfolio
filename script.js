// ---------- Data ----------
const SKILLS = [
  { key: "languages", items: ["C#", "JavaScript"] },
  {
    key: "backend",
    items: [
      "ASP.NET Core",
      ".NET Core",
      "Entity Framework Core",
      "ADO.NET",
      "JWT Authentication",
      "Swagger",
    ],
  },
  {
    key: "frontend",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "React",
      "Babel",
    ],
  },
  { key: "database", items: ["Microsoft SQL Server", "SQLite"] },
  { key: "tools", items: ["Git", "GitHub"] },
];
const STRONG_SKILLS = [
  "C#",
  ".NET Core",
  "ASP.NET Core",
  "Entity Framework Core",
  "ADO.NET",
];

const PROJECTS = [
  {
    key: "honey",
    repo: "Honey Photo",
    url: "https://github.com/fazilmmmdzad/HoneyPhoto",
    tech: ["C#", "Windows Forms"],
  },
  {
    key: "temp",
    repo: "Honey Degrees",
    url: "https://github.com/fazilmmmdzad/Temperature_Transducer",
    tech: ["C#", "Windows Forms"],
  },
];

const TERMINAL_LINES = [
  "$ whoami",
  "fazil_memmedzade",
  "$ dotnet --version",
  "8.0.100",
  "$ cat stack.json",
  '{ "frontend": "React", "backend": "ASP.NET Core", "orm": "EF Core", "db": "MSSQL" }',
  "$ status",
  "building Project...",
];

// ---------- State ----------
let currentLang = "en";

// ---------- i18n ----------
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
}

function renderSkills(lang) {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  const dict = translations[lang].skills.categories;
  grid.innerHTML = SKILLS.map(
    (cat) => `
    <div class="p-6 rounded-lg border card-hover reveal visible" style="border-color:var(--border); background:var(--surface)">
      <h3 class="font-mono text-xs uppercase tracking-widest mb-4" style="color:var(--accent-bright)">${dict[cat.key]}</h3>
      <div class="flex flex-wrap gap-2">
        ${cat.items
          .map(
            (s) => `
          <span class="px-3 py-1.5 rounded-md text-xs font-mono ${STRONG_SKILLS.includes(s) ? "font-semibold" : ""}"
            style="background:var(--surface-2); color:${STRONG_SKILLS.includes(s) ? "var(--accent-bright)" : "var(--text-muted)"}; border:1px solid var(--border)">
            ${s}
          </span>`,
          )
          .join("")}
      </div>
    </div>
  `,
  ).join("");
}

function renderProjects(lang) {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  const dict = translations[lang].projects;
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <a href="${p.url}" target="_blank" rel="noopener" class="block p-6 rounded-lg border card-hover reveal visible" style="border-color:var(--border); background:var(--surface)">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-display font-semibold text-lg">${dict[p.key].title}</h3>
        <svg class="w-4 h-4" style="color:var(--text-muted)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H8M17 7v9"/></svg>
      </div>
      <p class="text-sm mb-5" style="color:var(--text-muted)">${dict[p.key].desc}</p>
      <div class="flex flex-wrap gap-2">
        ${p.tech.map((t) => `<span class="px-2.5 py-1 rounded text-[11px] font-mono" style="background:var(--surface-2); color:var(--accent-bright)">${t}</span>`).join("")}
      </div>
    </a>
  `,
  ).join("");
}

// ---------- Theme ----------
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document
    .getElementById("themeIconDark")
    .classList.toggle("hidden", theme === "light");
  document
    .getElementById("themeIconLight")
    .classList.toggle("hidden", theme !== "light");
}

// ---------- Loader ----------
window.addEventListener("load", () => {
  setTimeout(
    () => document.getElementById("loader").classList.add("hide"),
    500,
  );
});

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  setTheme("dark");
  applyTranslations(currentLang);
  document.getElementById("year").textContent = new Date().getFullYear();

  // Language toggle
  document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "az" : "en";
    applyTranslations(currentLang);
    startTyping();
  });

  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", () => {
    const isLight =
      document.documentElement.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
  });

  // Mobile menu
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

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.15 },
  );
  revealEls.forEach((el) => io.observe(el));

  // Active nav highlighting
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "education",
    "github",
    "contact",
  ]
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

  // Back to top
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  });
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  // Custom cursor
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  window.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
  });
  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ring.style.width = "44px";
      ring.style.height = "44px";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
    });
  });

  // Terminal typing effect
  typeTerminal();
  startTyping();

  // Network canvas background
  initNetwork();

  // GitHub repos
  // loadRepos();

  // ---------- Contact form -> Mail Client ----------
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);

   const body = encodeURIComponent(message);

    window.location.href = `mailto:fazilmmmdzad48@gmail.com?subject=${subject}&body=${body}`;
});
});

// ---------- Hero role typing animation ----------
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

// ---------- Terminal lines animation ----------
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

// ---------- Network canvas ----------
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
          ctx.strokeStyle = `rgba(63,209,135,${1 - dist / 130})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = "rgba(63,209,135,0.7)";
      ctx.beginPath();
      ctx.arc(points[i].x, points[i].y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  resize();
  window.addEventListener("resize", resize);
  if (!reduceMotion) draw();
  else draw();
}

// // ---------- GitHub repos ----------
// async function loadRepos() {
//   const grid = document.getElementById("repoGrid");
//   try {
//     const res = await fetch("https://api.github.com/users/fazilmmmdzad/repos?sort=updated&per_page=6");
//     if (!res.ok) throw new Error("GitHub API error");
//     const repos = await res.json();
//     grid.innerHTML = repos.map((r) => `
//       <a href="${r.html_url}" target="_blank" rel="noopener" class="block p-5 rounded-lg border card-hover" style="border-color:var(--border); background:var(--surface)">
//         <div class="flex items-center justify-between mb-2">
//           <h4 class="font-mono text-sm font-semibold">${r.name}</h4>
//           <span class="font-mono text-[11px]" style="color:var(--text-muted)">★ ${r.stargazers_count}</span>
//         </div>
//         <p class="text-xs" style="color:var(--text-muted)">${r.description ? r.description : "&nbsp;"}</p>
//         ${r.language ? `<span class="inline-block mt-3 px-2 py-0.5 rounded text-[11px] font-mono" style="background:var(--surface-2); color:var(--accent-bright)">${r.language}</span>` : ""}
//       </a>
//     `).join("");
//   } catch (err) {
//     grid.innerHTML = "";
//   }
// }
