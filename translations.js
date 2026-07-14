// Translations for Fazil Məmmədzadə's portfolio (EN / AZ)
const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      focus: "Focus",
      contact: "Contact",
    },
    hero: {
      eyebrow: "full-stack developer",
      subtitle:
        "I enjoy building scalable web applications, APIs, ERP and POS solutions across both frontend and backend while continuously learning modern technologies.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
      roles: [
        "Full-Stack Developer",
        "ASP.NET Core Developer",
        "React Developer",
        "Always Learning",
      ],
    },
    about: {
      eyebrow: "about",
      title: "Who I am",
      p1: "I'm a 15-year-old developer from Baku, Azerbaijan, currently in 10th grade. I've been learning programming for about three years, driven by genuine curiosity about how software works.",
      p2: "I'm focused on full-stack development, building both frontend and backend applications. I'm especially drawn to ERP and POS systems—the logic behind inventory, sales, and multi-branch operations fascinates me.",
      p3: "I'm highly motivated to keep learning new technologies, and most of what I know comes from building real projects and studying documentation closely.",
      locationLabel: "Location",
      location: "Baku, Azerbaijan",
      ageLabel: "Age",
      age: "15",
      focusLabel: "Focus",
      focus: "ERP & POS Systems",
    },
    skills: {
      eyebrow: "skills",
      title: "What I work with",
      categories: {
        languages: "Languages",
        backend: "Backend",
        frontend: "Frontend",
        database: "Database",
        tools: "Tools",
      },
    },
    projects: {
      eyebrow: "projects",
      title: "Selected work",
      more: "More projects coming soon.",
      honey: {
        title: "Honey Photo",
        desc: "Desktop image editing application developed with C# Windows Forms.",
      },
      temp: {
        title: "Honey Degrees",
        desc: "A simple tool to instantly convert temperatures between Celsius, Fahrenheit, and Kelvin.",
      },
      viewRepo: "View Repository",
    },
    focus: {
      eyebrow: "focus",
      title: "What I'm building now",
      cards: {
        current: {
          title: "Current focus",
          desc: "Building Stoksy, a multi-company, multi-branch POS ERP with ASP.NET Core, EF Core and MSSQL — currently working through branch, warehouse and cash-register permission architecture.",
        },
        philosophy: {
          title: "How I approach problems",
          desc: "I design the database schema first, then the backend logic, then the interface — confirming each layer works before moving to the next.",
        },
        learning: {
          title: "What I'm exploring",
          desc: "React with Ant Design Pro for enterprise dashboards, deeper EF Core patterns, and cleaner multi-tenant architecture.",
        },
      },
      workflowTitle: "My workflow",
      workflow: {
        schema: {
          title: "Schema",
          desc: "Design the database first — tables, relationships, constraints, naming conventions.",
        },
        backend: {
          title: "Backend",
          desc: "Build the API and business logic with ASP.NET Core and Entity Framework Core.",
        },
        interface: {
          title: "Interface",
          desc: "Build the UI once the data layer is proven and stable.",
        },
        refine: {
          title: "Refine",
          desc: "Test, iterate, and harden the system before calling it done.",
        },
      },
    },
    contact: {
      eyebrow: "contact",
      title: "Let's talk",
      subtitle:
        "Have a project, a question, or just want to say hi? My inbox is open.",
      emailBtn: "Email Me",
      githubBtn: "GitHub",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendBtn: "Send Message",
      note: "This form opens your email client — no data is stored or sent anywhere else.",
    },
    footer: { built: "Built with HTML, Tailwind CSS and JavaScript." },
  },

  az: {
    nav: {
      about: "Haqqımda",
      skills: "Bacarıqlar",
      projects: "Layihələr",
      focus: "Fokus",
      contact: "Əlaqə",
    },
    hero: {
      eyebrow: "full-stack developer",
      subtitle:
        "Frontend və backend texnologiyalarından istifadə edərək miqyaslana bilən veb tətbiqləri, API-lər, ERP və POS həlləri hazırlamağı sevirəm və daim müasir texnologiyaları öyrənirəm.",
      btnProjects: "Layihələrə Bax",
      btnContact: "Mənimlə Əlaqə",
      roles: [
        "Full-Stack Developer",
        "ASP.NET Core Developer",
        "React Developer",
        "Daim öyrənirəm",
      ],
    },
    about: {
      eyebrow: "haqqımda",
      title: "Kiməm",
      p1: "Bakı, Azərbaycandan 15 yaşlı developerəm və hazırda 10-cu sinifdə oxuyuram. Təxminən üç ildir proqramlaşdırma öyrənirəm — bunun səbəbi proqram təminatının necə işlədiyinə olan həqiqi maraqdır.",
      p2: "Əsasən full-stack developmentə fokuslanmışam, xüsusilə ERP və POS sistemlərinə böyük maraq göstərirəm — anbar, satış və çox filiallı əməliyyatların arxasındakı məntiq məni cəlb edir.",
      p3: "Yeni texnologiyaları öyrənməyə yüksək həvəsim var və bildiklərimin əksəriyyəti real layihələr qurmaqdan və sənədləri diqqətlə araşdırmaqdan gəlir.",
      locationLabel: "Məkan",
      location: "Bakı, Azərbaycan",
      ageLabel: "Yaş",
      age: "15",
      focusLabel: "Fokus",
      focus: "ERP və POS Sistemləri",
    },
    skills: {
      eyebrow: "bacarıqlar",
      title: "Nə ilə işləyirəm",
      categories: {
        languages: "Dillər",
        backend: "Backend",
        frontend: "Frontend",
        database: "Verilənlər Bazası",
        tools: "Alətlər",
      },
    },
    projects: {
      eyebrow: "layihələr",
      title: "Seçilmiş işlər",
      more: "Yeni layihələr tezliklə əlavə olunacaq.",
      honey: {
        title: "Honey Photo",
        desc: "C# Windows Forms ilə hazırlanmış desktop şəkil redaktəsi tətbiqi.",
      },
      temp: {
        title: "Honey Degrees",
        desc: "Selsi, Faranheyt və Kelvin arasında temperaturları sürətlə çevirən sadə bir proqram.",
      },
      viewRepo: "Repository-ə Bax",
    },
    focus: {
      eyebrow: "fokus",
      title: "Hazırda nə qururam",
      cards: {
        current: {
          title: "Hazırkı fokus",
          desc: "ASP.NET Core, EF Core və MSSQL ilə çox şirkətli, çox filiallı POS ERP sistemi olan Stoksy-ni qururam — hazırda filial, anbar və kassa aparatı icazə arxitekturası üzərində işləyirəm.",
        },
        philosophy: {
          title: "Problemlərə yanaşmam",
          desc: "Əvvəlcə verilənlər bazası sxemini, sonra backend məntiqini, sonra isə interfeysi qururam — hər qatın işlədiyini təsdiqlədikdən sonra növbətinə keçirəm.",
        },
        learning: {
          title: "Nə araşdırıram",
          desc: "Korporativ dashboard-lar üçün React və Ant Design Pro, daha dərin EF Core pattern-ləri və daha təmiz multi-tenant arxitektura.",
        },
      },
      workflowTitle: "İş prosesim",
      workflow: {
        schema: {
          title: "Sxem",
          desc: "Əvvəlcə verilənlər bazasını dizayn edirəm — cədvəllər, əlaqələr, məhdudiyyətlər, adlandırma qaydaları.",
        },
        backend: {
          title: "Backend",
          desc: "ASP.NET Core və Entity Framework Core ilə API və biznes məntiqini qururam.",
        },
        interface: {
          title: "İnterfeys",
          desc: "Data qatı sınaqdan keçdikdən və stabil olduqdan sonra UI-ı qururam.",
        },
        refine: {
          title: "Cilalama",
          desc: "Bitmiş hesab etməzdən əvvəl sistemi test edir, təkmilləşdirir və möhkəmləndirirəm.",
        },
      },
    },
    contact: {
      eyebrow: "əlaqə",
      title: "Danışaq",
      subtitle:
        "Layihəniz, sualınız var, yoxsa sadəcə salam demək istəyirsiniz? Poçt qutum açıqdır.",
      emailBtn: "Mənə Yazın",
      githubBtn: "GitHub",
      nameLabel: "Ad",
      emailLabel: "E-poçt",
      messageLabel: "Mesaj",
      sendBtn: "Mesaj Göndər",
      note: "Bu forma e-poçt tətbiqinizi açır — heç bir məlumat saxlanılmır və ya başqa yerə göndərilmir.",
    },
    footer: { built: "HTML, Tailwind CSS və JavaScript ilə hazırlanıb." },
  },
};
