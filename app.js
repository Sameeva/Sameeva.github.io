"use strict";

const T = {
  en: {
    "nav.projects": "Projects", "nav.services": "Services", "nav.contact": "Contact",
    "hero.who": "Houssam Djerir, web developer",
    "hero.title": "I build web apps and AI solutions for people and businesses.",
    "hero.lede": "From idea to a working product. Simple, fast, and built around what you actually need.",
    "hero.cta1": "View projects", "hero.cta2": "Contact me",
    "projects.title": "Projects",
    "status.dev": "In development", "status.soon": "Incoming",
    "fatura.tag": "Invoices and receipts, ready to download as PDF.",
    "fatura.desc": "A clean invoice and receipt maker. It fills in the required legal and tax details so you can download a proper PDF without wrestling with Excel or Word templates.",
    "fatura.b1": "Legal and tax details filled in for you",
    "fatura.b2": "Download a clean PDF",
    "fatura.b3": "No spreadsheet or document templates to maintain",
    "order.tag": "Orders for cash-on-delivery sellers.",
    "order.desc": "A simple order dashboard for online sellers who get paid on delivery. Keep every customer order in one place and confirm it by phone.",
    "order.b1": "Orders organized by region",
    "order.b2": "Call confirmation queue for the seller",
    "order.b3": "Delivery sheets ready to export for courier companies",
    "menu.tag": "QR menus for cafés and restaurants.",
    "menu.desc": "Contactless menus for cafés and restaurants. Guests scan a table code on their phone and the order goes straight to a live screen in the kitchen.",
    "menu.b1": "Guests scan a table code",
    "menu.b2": "Orders appear on a live kitchen screen",
    "menu.b3": "Nothing for guests to install",
    "link.github": "Open on GitHub", "link.none": "Repository not published yet", "close": "Close",
    "services.title": "What I build",
    "s1.title": "Web applications", "s1.desc": "Dashboards, invoicing tools and ordering systems, built with Next.js and TypeScript.",
    "s2.title": "AI solutions", "s2.desc": "Chatbots, assistants and automations built on language models, wired into the tools you already use.",
    "s3.title": "Databases", "s3.desc": "Schema design, SQL queries and performance tuning.",
    "tools.title": "Tools",
    "contact.title": "Have a project in mind?", "contact.body": "Find me on GitHub and tell me what you need.", "contact.cta": "Go to my GitHub profile",
    "about.title": "About",
    "about.body": "I'm Houssam, a developer with a background in databases. I build web products from start to finish, and I care about the parts people don't see: correct numbers, clean data and fast pages. You work with me directly, from your first message to the final delivery.",
    "process.title": "How we work together",
    "p1.t": "Brief",
    "p1.d": "You describe what you need. I reply with questions, a clear scope and a price.",
    "p2.t": "Build",
    "p2.d": "I build in small steps and show progress along the way, so nothing comes as a surprise.",
    "p3.t": "Deliver",
    "p3.d": "You get the working product and a short handover so you can use it right away.",
    "hood.title": "Under the hood",
    "link.demo": "Try the live demo",
    "fatura.alt1": "FaturaDZ documents list with a draft and finalized invoices",
    "fatura.alt2": "A finalized invoice with line items, VAT per rate and totals",
    "fatura.alt3": "The invoice editor",
    "fatura.h1": "All money is stored as whole cents and rounded once per tax rate, so totals always add up.",
    "fatura.h2": "Numbering is sequential per document type and year, assigned in a single transaction when a document is finalized.",
    "fatura.h3": "Everything runs in the browser: data stays in IndexedDB on the user's device, with validated JSON backup and restore.",
    "fatura.h4": "Unit and property tests, a strict content security policy, and CI on every push.",
    "order.h1": "Multi-store from the start: every table carries a store id and every query is scoped to the signed-in store.",
    "order.h2": "Row-level security is on for every table, so the public API reads nothing and only the server reaches the data.",
    "order.h3": "Order numbers come from a counter incremented in the same transaction as the order, never from MAX+1.",
    "order.h4": "Status follows a strict state machine, and every change writes an event to the order's history.",
    "foot": "© 2026 Houssam Djerir", "title": "Houssam Djerir, web developer"
  },
  fr: {
    "nav.projects": "Projets", "nav.services": "Services", "nav.contact": "Contact",
    "hero.who": "Houssam Djerir, développeur web",
    "hero.title": "Je crée des applications web et des solutions d'IA pour les particuliers et les entreprises.",
    "hero.lede": "De l'idée au produit qui fonctionne. Simple, rapide et pensé pour ce dont vous avez vraiment besoin.",
    "hero.cta1": "Voir les projets", "hero.cta2": "Me contacter",
    "projects.title": "Projets",
    "status.dev": "En développement", "status.soon": "Bientôt",
    "fatura.tag": "Factures et reçus, à télécharger en PDF.",
    "fatura.desc": "Un générateur de factures et de reçus. Il remplit les mentions légales et fiscales requises pour que vous puissiez télécharger un PDF correct sans lutter avec des modèles Excel ou Word.",
    "fatura.b1": "Mentions légales et fiscales remplies pour vous",
    "fatura.b2": "Téléchargement d'un PDF propre",
    "fatura.b3": "Aucun modèle de tableur ou de document à maintenir",
    "order.tag": "Commandes pour vendeurs en paiement à la livraison.",
    "order.desc": "Un tableau de bord simple pour les vendeurs en ligne payés à la livraison. Gardez toutes les commandes au même endroit et confirmez-les par téléphone.",
    "order.b1": "Commandes organisées par région",
    "order.b2": "File de confirmation par appel pour le vendeur",
    "order.b3": "Bordereaux de livraison à exporter pour les transporteurs",
    "menu.tag": "Menus QR pour cafés et restaurants.",
    "menu.desc": "Des menus sans contact pour cafés et restaurants. Le client scanne le code de sa table avec son téléphone et la commande arrive directement sur un écran en cuisine.",
    "menu.b1": "Le client scanne le code de sa table",
    "menu.b2": "Les commandes s'affichent sur un écran de cuisine en direct",
    "menu.b3": "Rien à installer pour les clients",
    "link.github": "Ouvrir sur GitHub", "link.none": "Dépôt pas encore publié", "close": "Fermer",
    "services.title": "Ce que je construis",
    "s1.title": "Applications web", "s1.desc": "Tableaux de bord, outils de facturation et systèmes de commande, avec Next.js et TypeScript.",
    "s2.title": "Solutions d'IA", "s2.desc": "Chatbots, assistants et automatisations basés sur des modèles de langage, intégrés aux outils que vous utilisez déjà.",
    "s3.title": "Bases de données", "s3.desc": "Conception de schémas, requêtes SQL et optimisation des performances.",
    "tools.title": "Outils",
    "contact.title": "Un projet en tête ?", "contact.body": "Retrouvez-moi sur GitHub et dites-moi ce dont vous avez besoin.", "contact.cta": "Voir mon profil GitHub",
    "about.title": "À propos",
    "about.body": "Je suis Houssam, développeur avec une formation en bases de données. Je construis des produits web de bout en bout, et je soigne ce que les gens ne voient pas : des montants justes, des données propres et des pages rapides. Vous travaillez directement avec moi, de votre premier message à la livraison finale.",
    "process.title": "Comment on travaille ensemble",
    "p1.t": "Cadrage",
    "p1.d": "Vous décrivez votre besoin. Je réponds avec des questions, un périmètre clair et un prix.",
    "p2.t": "Réalisation",
    "p2.d": "Je construis par petites étapes et je montre l'avancement, pour qu'il n'y ait aucune surprise.",
    "p3.t": "Livraison",
    "p3.d": "Vous recevez le produit fonctionnel et une courte prise en main pour l'utiliser tout de suite.",
    "hood.title": "Sous le capot",
    "link.demo": "Essayer la démo en ligne",
    "fatura.alt1": "Liste des documents FaturaDZ avec un brouillon et des factures finalisées",
    "fatura.alt2": "Une facture finalisée avec ses lignes, la TVA par taux et les totaux",
    "fatura.alt3": "L'éditeur de facture",
    "fatura.h1": "Les montants sont stockés en centimes entiers et arrondis une seule fois par taux de TVA, donc les totaux sont toujours justes.",
    "fatura.h2": "La numérotation est séquentielle par type de document et par année, attribuée en une seule transaction à la finalisation.",
    "fatura.h3": "Tout fonctionne dans le navigateur : les données restent dans IndexedDB sur l'appareil, avec sauvegarde et restauration JSON validées.",
    "fatura.h4": "Tests unitaires et par propriétés, politique de sécurité de contenu stricte et CI à chaque push.",
    "order.h1": "Multi-boutique dès le départ : chaque table porte un identifiant de boutique et chaque requête est limitée à la boutique connectée.",
    "order.h2": "La sécurité au niveau des lignes est activée sur chaque table : l'API publique ne lit rien, seul le serveur accède aux données.",
    "order.h3": "Les numéros de commande viennent d'un compteur incrémenté dans la même transaction que la commande, jamais par MAX+1.",
    "order.h4": "Le statut suit une machine à états stricte, et chaque changement écrit un événement dans l'historique de la commande.",
    "foot": "© 2026 Houssam Djerir", "title": "Houssam Djerir, développeur web"
  },
  ar: {
    "nav.projects": "المشاريع", "nav.services": "الخدمات", "nav.contact": "تواصل",
    "hero.who": "حسام جرير، مطوّر ويب",
    "hero.title": "أبني تطبيقات ويب وحلول ذكاء اصطناعي للأفراد والشركات.",
    "hero.lede": "من الفكرة إلى منتج يعمل. بسيط وسريع ومصمم وفق ما تحتاجه فعلاً.",
    "hero.cta1": "عرض المشاريع", "hero.cta2": "تواصل معي",
    "projects.title": "المشاريع",
    "status.dev": "قيد التطوير", "status.soon": "قريبًا",
    "fatura.tag": "فواتير وإيصالات جاهزة للتحميل بصيغة PDF.",
    "fatura.desc": "أداة نظيفة لإنشاء الفواتير والإيصالات. تملأ البيانات القانونية والضريبية المطلوبة لتحمّل ملف PDF سليمًا دون عناء قوالب Excel أو Word.",
    "fatura.b1": "البيانات القانونية والضريبية تُملأ تلقائيًا",
    "fatura.b2": "تحميل ملف PDF نظيف",
    "fatura.b3": "لا حاجة لصيانة قوالب جداول أو مستندات",
    "order.tag": "طلبات لبائعي الدفع عند الاستلام.",
    "order.desc": "لوحة طلبات بسيطة للبائعين عبر الإنترنت الذين يتقاضون عند التسليم. اجمع كل طلبات الزبائن في مكان واحد وأكّدها عبر الهاتف.",
    "order.b1": "طلبات منظمة حسب المنطقة",
    "order.b2": "قائمة تأكيد بالاتصال للبائع",
    "order.b3": "كشوف تسليم جاهزة للتصدير لشركات التوصيل",
    "menu.tag": "قوائم طعام برمز QR للمقاهي والمطاعم.",
    "menu.desc": "قوائم طعام بلا تلامس للمقاهي والمطاعم. يمسح الزبون رمز الطاولة بهاتفه فيصل الطلب مباشرة إلى شاشة حية في المطبخ.",
    "menu.b1": "يمسح الزبون رمز الطاولة",
    "menu.b2": "تظهر الطلبات على شاشة المطبخ مباشرة",
    "menu.b3": "لا شيء يحتاج الزبون إلى تثبيته",
    "link.github": "فتح على GitHub", "link.none": "لم يُنشر المستودع بعد", "close": "إغلاق",
    "services.title": "ما أبنيه",
    "s1.title": "تطبيقات الويب", "s1.desc": "لوحات تحكم وأدوات فوترة وأنظمة طلبات، مبنية بـ Next.js وTypeScript.",
    "s2.title": "حلول الذكاء الاصطناعي", "s2.desc": "روبوتات محادثة ومساعدون وأتمتة مبنية على نماذج لغوية، مدمجة مع الأدوات التي تستخدمها أصلًا.",
    "s3.title": "قواعد البيانات", "s3.desc": "تصميم المخططات واستعلامات SQL وتحسين الأداء.",
    "tools.title": "الأدوات",
    "contact.title": "هل لديك مشروع؟", "contact.body": "تجدني على GitHub، أخبرني بما تحتاجه.", "contact.cta": "افتح حسابي على GitHub",
    "about.title": "نبذة عني",
    "about.body": "أنا حسام، مطوّر بخلفية في قواعد البيانات. أبني منتجات الويب من البداية إلى النهاية، وأهتم بما لا يراه الناس: أرقام صحيحة وبيانات نظيفة وصفحات سريعة. تتعامل معي مباشرة، من أول رسالة حتى التسليم النهائي.",
    "process.title": "كيف نعمل معًا",
    "p1.t": "الاتفاق",
    "p1.d": "تصف لي ما تحتاجه. أرد عليك بأسئلة ونطاق واضح وسعر.",
    "p2.t": "التنفيذ",
    "p2.d": "أبني على مراحل صغيرة وأعرض لك التقدم أولًا بأول، فلا تكون هناك مفاجآت.",
    "p3.t": "التسليم",
    "p3.d": "تستلم المنتج جاهزًا مع شرح مختصر لتستعمله فورًا.",
    "hood.title": "خلف الكواليس",
    "link.demo": "جرّب النسخة التجريبية",
    "fatura.alt1": "قائمة مستندات FaturaDZ مع مسودة وفواتير نهائية",
    "fatura.alt2": "فاتورة نهائية مع البنود والضريبة لكل نسبة والمجاميع",
    "fatura.alt3": "محرر الفواتير",
    "fatura.h1": "تُخزَّن المبالغ كأعداد صحيحة من السنتيمات وتُقرَّب مرة واحدة لكل نسبة ضريبة، فتتطابق المجاميع دائمًا.",
    "fatura.h2": "الترقيم متسلسل لكل نوع مستند وكل سنة، ويُمنح في معاملة واحدة عند الإنهاء.",
    "fatura.h3": "كل شيء يعمل داخل المتصفح: تبقى البيانات في IndexedDB على جهاز المستخدم، مع نسخ احتياطي واستعادة بصيغة JSON يتم التحقق منها.",
    "fatura.h4": "اختبارات وحدات واختبارات خصائص، وسياسة أمان محتوى صارمة، وتكامل مستمر مع كل دفعة.",
    "order.h1": "متعدد المتاجر منذ البداية: كل جدول يحمل معرّف المتجر وكل استعلام مقيّد بالمتجر المسجَّل دخوله.",
    "order.h2": "أمان مستوى الصفوف مفعّل على كل جدول: الواجهة العامة لا تقرأ شيئًا، والخادم وحده يصل إلى البيانات.",
    "order.h3": "أرقام الطلبات تأتي من عدّاد يزداد في نفس معاملة الطلب، وليس بطريقة MAX+1.",
    "order.h4": "تتبع الحالة آلة حالات صارمة، وكل تغيير يكتب حدثًا في سجل الطلب.",
    "foot": "© 2026 حسام جرير", "title": "حسام جرير، مطوّر ويب"
  }
};

const PROJECTS = {
  fatura: { link: "https://github.com/Sameeva/FaturaDZ", demo: "https://fatura-dz.vercel.app", status: "dev",
            shots: [["img/fatura-list.png", 410], ["img/fatura-invoice.png", 650], ["img/fatura-editor.png", 702]], hood: 4 },
  order:  { link: "https://github.com/Sameeva/OrderDZ", demo: null, status: "dev", shots: [], hood: 4 },
  menu:   { link: null, demo: null, status: "soon", shots: [], hood: 0 }
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
  const li = (text) => Object.assign(document.createElement("li"), { textContent: text });
  document.getElementById("sheet-title").textContent = names[id];
  const st = document.getElementById("sheet-status");
  st.textContent = t("status." + p.status);
  st.className = "status " + p.status;
  document.getElementById("sheet-desc").textContent = t(id + ".desc");
  document.getElementById("sheet-points").replaceChildren(...[1, 2, 3].map((n) => li(t(`${id}.b${n}`))));

  const shots = document.getElementById("sheet-shots");
  shots.replaceChildren(...p.shots.map(([src, height], i) => Object.assign(document.createElement("img"), {
    src, alt: t(`${id}.alt${i + 1}`), width: 1280, height, loading: "lazy"
  })));
  shots.hidden = p.shots.length === 0;

  const hood = document.getElementById("sheet-hood");
  hood.replaceChildren(...Array.from({ length: p.hood }, (_, i) => li(t(`${id}.h${i + 1}`))));
  hood.hidden = document.getElementById("hood-title").hidden = p.hood === 0;

  const demo = document.getElementById("sheet-demo");
  demo.hidden = !p.demo;
  if (p.demo) { demo.href = p.demo; demo.textContent = t("link.demo"); }

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
