"use strict";

const T = {
  en: {
    "nav.projects": "Projects", "nav.services": "Services", "nav.contact": "Contact",
    "hero.who": "Houssam Djerir, web developer in Algiers",
    "hero.title": "I build web apps for Algerian businesses.",
    "hero.lede": "Invoicing, orders and menus. Simple, fast, and built around how local shops actually work.",
    "hero.cta1": "View projects", "hero.cta2": "Contact me",
    "projects.title": "Projects",
    "status.dev": "In development", "status.soon": "Incoming",
    "fatura.tag": "Invoices and receipts with the Algerian tax details filled in.",
    "fatura.desc": "A clean invoice and receipt maker for Algerian businesses. It handles the legal details so you can download a proper PDF without wrestling with Excel or Word templates.",
    "fatura.b1": "NIF, RC, Article d'imposition and timbre fiscal included",
    "fatura.b2": "Download a clean PDF",
    "fatura.b3": "No spreadsheet or document templates to maintain",
    "order.tag": "Orders for cash-on-delivery sellers, across all 69 wilayas.",
    "order.desc": "A simple order dashboard for Algerian e-commerce sellers who get paid on delivery. Keep every customer order in one place and confirm it by phone.",
    "order.b1": "Covers all 69 wilayas",
    "order.b2": "Call confirmation queue for the seller",
    "order.b3": "Delivery sheets ready for Yalidine and ZR Express",
    "menu.tag": "QR menus for cafés and restaurants.",
    "menu.desc": "Contactless menus for cafés and restaurants. Guests scan a table code on their phone and the order goes straight to a live screen in the kitchen.",
    "menu.b1": "Guests scan a table code",
    "menu.b2": "Orders appear on a live kitchen screen",
    "menu.b3": "Nothing for guests to install",
    "link.github": "Open on GitHub", "link.none": "Repository not published yet", "close": "Close",
    "services.title": "What I build",
    "s1.title": "Web applications", "s1.desc": "Dashboards, invoicing tools and ordering systems, built with Next.js and TypeScript.",
    "s2.title": "Databases", "s2.desc": "Schema design, SQL queries and optimization on PostgreSQL and Oracle.",
    "s3.title": "Desktop software and scripts", "s3.desc": "Delphi desktop software and Python automation for the workflows you already have.",
    "tools.title": "Tools",
    "contact.title": "Have a project in mind?", "contact.body": "Find me on GitHub and tell me what you need.", "contact.cta": "Go to my GitHub profile",
    "foot": "Algiers, Algeria", "title": "Houssam Djerir, web developer"
  },
  fr: {
    "nav.projects": "Projets", "nav.services": "Services", "nav.contact": "Contact",
    "hero.who": "Houssam Djerir, développeur web à Alger",
    "hero.title": "Je crée des applications web pour les entreprises algériennes.",
    "hero.lede": "Facturation, commandes et menus. Simples, rapides et pensés pour le fonctionnement réel des commerces locaux.",
    "hero.cta1": "Voir les projets", "hero.cta2": "Me contacter",
    "projects.title": "Projets",
    "status.dev": "En développement", "status.soon": "Bientôt",
    "fatura.tag": "Factures et reçus avec les mentions fiscales algériennes.",
    "fatura.desc": "Un générateur de factures et de reçus pour les entreprises algériennes. Il gère les mentions légales pour que vous puissiez télécharger un PDF correct sans lutter avec des modèles Excel ou Word.",
    "fatura.b1": "NIF, RC, article d'imposition et timbre fiscal inclus",
    "fatura.b2": "Téléchargement d'un PDF propre",
    "fatura.b3": "Aucun modèle de tableur ou de document à maintenir",
    "order.tag": "Commandes pour vendeurs en paiement à la livraison, dans les 69 wilayas.",
    "order.desc": "Un tableau de bord simple pour les vendeurs e-commerce algériens payés à la livraison. Gardez toutes les commandes au même endroit et confirmez-les par téléphone.",
    "order.b1": "Couvre les 69 wilayas",
    "order.b2": "File de confirmation par appel pour le vendeur",
    "order.b3": "Bordereaux de livraison prêts pour Yalidine et ZR Express",
    "menu.tag": "Menus QR pour cafés et restaurants.",
    "menu.desc": "Des menus sans contact pour cafés et restaurants. Le client scanne le code de sa table avec son téléphone et la commande arrive directement sur un écran en cuisine.",
    "menu.b1": "Le client scanne le code de sa table",
    "menu.b2": "Les commandes s'affichent sur un écran de cuisine en direct",
    "menu.b3": "Rien à installer pour les clients",
    "link.github": "Ouvrir sur GitHub", "link.none": "Dépôt pas encore publié", "close": "Fermer",
    "services.title": "Ce que je construis",
    "s1.title": "Applications web", "s1.desc": "Tableaux de bord, outils de facturation et systèmes de commande, avec Next.js et TypeScript.",
    "s2.title": "Bases de données", "s2.desc": "Conception de schémas, requêtes SQL et optimisation sur PostgreSQL et Oracle.",
    "s3.title": "Logiciels de bureau et scripts", "s3.desc": "Logiciels de bureau Delphi et automatisation Python pour vos processus existants.",
    "tools.title": "Outils",
    "contact.title": "Un projet en tête ?", "contact.body": "Retrouvez-moi sur GitHub et dites-moi ce dont vous avez besoin.", "contact.cta": "Voir mon profil GitHub",
    "foot": "Alger, Algérie", "title": "Houssam Djerir, développeur web"
  },
  ar: {
    "nav.projects": "المشاريع", "nav.services": "الخدمات", "nav.contact": "تواصل",
    "hero.who": "حسام جرير، مطوّر ويب في الجزائر العاصمة",
    "hero.title": "أبني تطبيقات ويب للشركات الجزائرية.",
    "hero.lede": "فوترة وطلبات وقوائم طعام. بسيطة وسريعة ومصممة وفق طريقة عمل المحلات المحلية فعلاً.",
    "hero.cta1": "عرض المشاريع", "hero.cta2": "تواصل معي",
    "projects.title": "المشاريع",
    "status.dev": "قيد التطوير", "status.soon": "قريبًا",
    "fatura.tag": "فواتير وإيصالات تتضمن البيانات الضريبية الجزائرية.",
    "fatura.desc": "أداة نظيفة لإنشاء الفواتير والإيصالات للشركات الجزائرية. تتولى البيانات القانونية لتحمّل ملف PDF سليمًا دون عناء قوالب Excel أو Word.",
    "fatura.b1": "تشمل NIF وRC ومادة الضريبة وطابع الجباية",
    "fatura.b2": "تحميل ملف PDF نظيف",
    "fatura.b3": "لا حاجة لصيانة قوالب جداول أو مستندات",
    "order.tag": "طلبات لبائعي الدفع عند الاستلام، في الولايات الـ69 كلها.",
    "order.desc": "لوحة طلبات بسيطة لبائعي التجارة الإلكترونية في الجزائر الذين يتقاضون عند التسليم. اجمع كل طلبات الزبائن في مكان واحد وأكّدها عبر الهاتف.",
    "order.b1": "تغطي الولايات الـ69 كلها",
    "order.b2": "قائمة تأكيد بالاتصال للبائع",
    "order.b3": "كشوف تسليم جاهزة لـ Yalidine وZR Express",
    "menu.tag": "قوائم طعام برمز QR للمقاهي والمطاعم.",
    "menu.desc": "قوائم طعام بلا تلامس للمقاهي والمطاعم. يمسح الزبون رمز الطاولة بهاتفه فيصل الطلب مباشرة إلى شاشة حية في المطبخ.",
    "menu.b1": "يمسح الزبون رمز الطاولة",
    "menu.b2": "تظهر الطلبات على شاشة المطبخ مباشرة",
    "menu.b3": "لا شيء يحتاج الزبون إلى تثبيته",
    "link.github": "فتح على GitHub", "link.none": "لم يُنشر المستودع بعد", "close": "إغلاق",
    "services.title": "ما أبنيه",
    "s1.title": "تطبيقات الويب", "s1.desc": "لوحات تحكم وأدوات فوترة وأنظمة طلبات، مبنية بـ Next.js وTypeScript.",
    "s2.title": "قواعد البيانات", "s2.desc": "تصميم المخططات وكتابة استعلامات SQL وتحسين الأداء على PostgreSQL وOracle.",
    "s3.title": "برامج سطح المكتب والسكربتات", "s3.desc": "برامج سطح مكتب بـ Delphi وأتمتة بـ Python لسير عملك الحالي.",
    "tools.title": "الأدوات",
    "contact.title": "هل لديك مشروع؟", "contact.body": "تجدني على GitHub، أخبرني بما تحتاجه.", "contact.cta": "افتح حسابي على GitHub",
    "foot": "الجزائر العاصمة، الجزائر", "title": "حسام جرير، مطوّر ويب"
  }
};

const PROJECTS = {
  fatura: { link: "https://github.com/Sameeva/FaturaDZ", status: "dev" },
  order:  { link: "https://github.com/Sameeva/OrderDZ",  status: "dev" },
  menu:   { link: null,                                   status: "soon" }
};

const root = document.documentElement;
let lang = "en";
let openProject = null;
let lastTile = null;

const store = {
  get() { try { return localStorage.getItem("lang"); } catch { return null; } },
  set(v) { try { localStorage.setItem("lang", v); } catch { /* storage unavailable */ } }
};
const t = (k) => T[lang][k] ?? T.en[k] ?? k;

function applyLang(next) {
  lang = T[next] ? next : "en";
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  if (openProject) fillSheet(openProject);
  store.set(lang);
}

function detectLang() {
  const saved = store.get();
  if (saved && T[saved]) return saved;
  const nav = (navigator.language || "en").slice(0, 2);
  return T[nav] ? nav : "en";
}

/* bottom sheet */
const sheet = document.getElementById("sheet");
const scrim = document.getElementById("scrim");
const grab = document.getElementById("grab");
const closeBtn = document.getElementById("sheet-close");
const link = document.getElementById("sheet-link");

function fillSheet(id) {
  const p = PROJECTS[id];
  const names = { fatura: "FaturaDZ", order: "OrderDZ", menu: "MenuDZ" };
  document.getElementById("sheet-title").textContent = names[id];
  const st = document.getElementById("sheet-status");
  st.textContent = t("status." + p.status);
  st.className = "status " + p.status;
  document.getElementById("sheet-desc").textContent = t(id + ".desc");
  document.getElementById("sheet-points").replaceChildren(
    ...[1, 2, 3].map((n) => Object.assign(document.createElement("li"), { textContent: t(`${id}.b${n}`) }))
  );
  if (p.link) {
    link.href = p.link;
    link.textContent = t("link.github");
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
  } else {
    link.removeAttribute("href");
    link.textContent = t("link.none");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
  }
}

function openSheet(id, tile) {
  openProject = id;
  lastTile = tile;
  fillSheet(id);
  sheet.style.transform = "";
  sheet.removeAttribute("inert");
  scrim.classList.add("open");
  root.classList.add("locked");
  requestAnimationFrame(() => {
    sheet.classList.add("open");
    closeBtn.focus({ preventScroll: true });
  });
}

function closeSheet() {
  if (!openProject) return;
  openProject = null;
  sheet.style.transform = "";
  sheet.classList.remove("open", "dragging");
  scrim.classList.remove("open");
  root.classList.remove("locked");
  sheet.setAttribute("inert", "");
  if (lastTile) lastTile.focus({ preventScroll: true });
}

document.querySelectorAll(".tile").forEach((tile) =>
  tile.addEventListener("click", () => openSheet(tile.dataset.project, tile))
);
scrim.addEventListener("click", closeSheet);
closeBtn.addEventListener("click", closeSheet);
document.addEventListener("keydown", (e) => {
  if (!openProject) return;
  if (e.key === "Escape") { closeSheet(); return; }
  if (e.key !== "Tab") return;
  const items = [...sheet.querySelectorAll("a[href], button")].filter((el) => el.getAttribute("aria-disabled") !== "true");
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* drag the handle down to dismiss, with velocity */
let drag = null;
grab.addEventListener("pointerdown", (e) => {
  drag = { y: e.clientY, last: e.clientY, time: performance.now(), v: 0 };
  grab.setPointerCapture(e.pointerId);
  sheet.classList.add("dragging");
});
grab.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const now = performance.now();
  drag.v = (e.clientY - drag.last) / Math.max(now - drag.time, 1);
  drag.last = e.clientY; drag.time = now;
  const dy = Math.max(0, e.clientY - drag.y);
  sheet.style.transform = `translateY(${dy}px)`;
});
function endDrag(e) {
  if (!drag) return;
  const dy = Math.max(0, e.clientY - drag.y);
  const fast = drag.v > 0.6;
  drag = null;
  sheet.classList.remove("dragging");
  if (dy > sheet.offsetHeight * 0.3 || fast) closeSheet();
  else sheet.style.transform = "";
}
grab.addEventListener("pointerup", endDrag);
grab.addEventListener("pointercancel", endDrag);

document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
applyLang(detectLang());
