"use strict";

const T = {
  en: {
    "nav.projects": "Projects", "nav.services": "Services", "nav.contact": "Contact", "lang.label": "Language",
    "hero.who": "Houssam Djerir, web developer",
    "hero.title": "I build web apps and AI solutions.",
    "hero.lede": "From idea to a working product. Simple, fast, and built around what you actually need.",
    "hero.cta1": "View projects", "hero.cta2": "Contact me",
    "projects.title": "Projects",
    "status.dev": "In development", "status.demo": "Live demo", "status.soon": "Coming soon",
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
    "contact.title": "Have a project in mind?", "contact.body": "Message me on Telegram or WhatsApp and tell me what you need.", "contact.tg": "Message me on Telegram", "contact.wa": "Message me on WhatsApp", "contact.cta": "Go to my GitHub profile",
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
    "link.demo": "Try the live demo", "link.bot": "Try the bot",
    "fatura.alt1": "FaturaDZ documents list: a draft and two numbered invoices, with search and filter. Opens the full screenshot.",
    "fatura.alt2": "Totals of a finalized invoice: total before tax, VAT split by rate, stamp duty and the net amount to pay. Opens the full screenshot.",
    "fatura.alt3": "The invoice editor's client card, with the tax identifiers (NIF, RC, article) a legal invoice needs. Opens the full screenshot.",
    "fatura.h1": "All money is stored as whole cents and rounded once per tax rate, so totals always add up.",
    "fatura.h2": "Numbering is sequential per document type and year, assigned in a single transaction when a document is finalized.",
    "fatura.h3": "Everything runs in the browser: data stays in IndexedDB on the user's device, with validated JSON backup and restore.",
    "fatura.h4": "Unit and property tests, a strict content security policy, and CI on every push.",
    "order.h1": "Multi-store from the start: every table carries a store id and every query is scoped to the signed-in store.",
    "order.h2": "Row-level security is on for every table, so the public API reads nothing and only the server reaches the data.",
    "order.h3": "Order numbers come from a counter incremented in the same transaction as the order, never from MAX+1.",
    "order.h4": "Status follows a strict state machine, and every change writes an event to the order's history.",
    "status.live": "Live",
    "cbot.tag": "A Telegram bot that qualifies visitors and forwards leads.",
    "cbot.desc": "A Telegram bot that qualifies new visitors with a short guided brief, answers common questions, and forwards each lead to me. My replies are relayed back to them through the bot.",
    "cbot.b1": "Guided brief: project type, budget and deadline",
    "cbot.b2": "Answers common questions in English, French and Arabic",
    "cbot.b3": "My replies are relayed back to the visitor",
    "cbot.h1": "Stateless by design: the brief travels inside button data and prompt text, so there is no database to run.",
    "cbot.h2": "A secret header check rejects any request that doesn't come from Telegram, and only the owner can relay replies.",
    "cbot.h3": "Visitor names are escaped before they reach the owner, and long messages are truncated.",
    "cbot.h4": "Unit tests cover the flow, the FAQ matching and the abuse cases, and the code runs as a single serverless function.",
    "foot": "© 2026 Houssam Djerir", "title": "Houssam Djerir, web developer",
    "meta.desc": "Houssam Djerir, web developer. I build web apps and AI solutions: invoicing, order management and Telegram bots."
  },
  fr: {
    "nav.projects": "Projets", "nav.services": "Services", "nav.contact": "Contact", "lang.label": "Langue",
    "hero.who": "Houssam Djerir, développeur web",
    "hero.title": "Je crée des applications web et des solutions d'IA.",
    "hero.lede": "De l'idée au produit qui fonctionne. Simple, rapide et pensé pour ce dont vous avez vraiment besoin.",
    "hero.cta1": "Voir les projets", "hero.cta2": "Me contacter",
    "projects.title": "Projets",
    "status.dev": "En développement", "status.demo": "Démo en ligne", "status.soon": "Bientôt",
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
    "contact.title": "Un projet en tête ?", "contact.body": "Écrivez-moi sur Telegram ou WhatsApp et dites-moi ce dont vous avez besoin.", "contact.tg": "M'écrire sur Telegram", "contact.wa": "M'écrire sur WhatsApp", "contact.cta": "Voir mon profil GitHub",
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
    "link.demo": "Essayer la démo en ligne", "link.bot": "Essayer le bot",
    "fatura.alt1": "Liste des documents FaturaDZ : un brouillon et deux factures numérotées, avec recherche et filtre. Ouvre la capture complète.",
    "fatura.alt2": "Totaux d'une facture finalisée : total HT, TVA par taux, droit de timbre et net à payer. Ouvre la capture complète.",
    "fatura.alt3": "La fiche client de l'éditeur de facture, avec les identifiants fiscaux (NIF, RC, article) requis. Ouvre la capture complète.",
    "fatura.h1": "Les montants sont stockés en centimes entiers et arrondis une seule fois par taux de TVA, donc les totaux sont toujours justes.",
    "fatura.h2": "La numérotation est séquentielle par type de document et par année, attribuée en une seule transaction à la finalisation.",
    "fatura.h3": "Tout fonctionne dans le navigateur : les données restent dans IndexedDB sur l'appareil, avec sauvegarde et restauration JSON validées.",
    "fatura.h4": "Tests unitaires et par propriétés, politique de sécurité de contenu stricte et CI à chaque push.",
    "order.h1": "Multi-boutique dès le départ : chaque table porte un identifiant de boutique et chaque requête est limitée à la boutique connectée.",
    "order.h2": "La sécurité au niveau des lignes est activée sur chaque table : l'API publique ne lit rien, seul le serveur accède aux données.",
    "order.h3": "Les numéros de commande viennent d'un compteur incrémenté dans la même transaction que la commande, jamais par MAX+1.",
    "order.h4": "Le statut suit une machine à états stricte, et chaque changement écrit un événement dans l'historique de la commande.",
    "status.live": "En ligne",
    "cbot.tag": "Un bot Telegram qui qualifie les visiteurs et transmet les demandes.",
    "cbot.desc": "Un bot Telegram qui qualifie les nouveaux visiteurs avec un court cadrage guidé, répond aux questions courantes et me transmet chaque demande. Mes réponses leur sont renvoyées par le bot.",
    "cbot.b1": "Cadrage guidé : type de projet, budget et délai",
    "cbot.b2": "Répond aux questions courantes en anglais, français et arabe",
    "cbot.b3": "Mes réponses sont renvoyées au visiteur",
    "cbot.h1": "Sans état par conception : le cadrage voyage dans les données des boutons et le texte des invites, donc aucune base de données à gérer.",
    "cbot.h2": "Un en-tête secret rejette toute requête qui ne vient pas de Telegram, et seul le propriétaire peut relayer des réponses.",
    "cbot.h3": "Les noms des visiteurs sont échappés avant d'arriver au propriétaire, et les messages trop longs sont tronqués.",
    "cbot.h4": "Des tests unitaires couvrent le parcours, la correspondance de la FAQ et les cas d'abus, et le code tourne comme une seule fonction serverless.",
    "foot": "© 2026 Houssam Djerir", "title": "Houssam Djerir, développeur web",
    "meta.desc": "Houssam Djerir, développeur web. Je crée des applications web et des solutions d'IA : facturation, gestion de commandes et bots Telegram."
  },
  ar: {
    "nav.projects": "المشاريع", "nav.services": "الخدمات", "nav.contact": "تواصل", "lang.label": "اللغة",
    "hero.who": "حسام جرير، مطوّر ويب",
    "hero.title": "أبني تطبيقات ويب وحلول ذكاء اصطناعي.",
    "hero.lede": "من الفكرة إلى منتج يعمل. بسيط وسريع ومصمم وفق ما تحتاجه فعلاً.",
    "hero.cta1": "عرض المشاريع", "hero.cta2": "تواصل معي",
    "projects.title": "المشاريع",
    "status.dev": "قيد التطوير", "status.demo": "نسخة تجريبية", "status.soon": "قريبًا",
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
    "contact.title": "هل لديك مشروع؟", "contact.body": "راسلني على Telegram أو WhatsApp وأخبرني بما تحتاجه.", "contact.tg": "راسلني على Telegram", "contact.wa": "راسلني على WhatsApp", "contact.cta": "افتح حسابي على GitHub",
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
    "link.demo": "جرّب النسخة التجريبية", "link.bot": "جرّب البوت",
    "fatura.alt1": "قائمة مستندات FaturaDZ: مسودة وفاتورتان مرقّمتان مع بحث وتصفية. تفتح لقطة الشاشة الكاملة.",
    "fatura.alt2": "مجاميع فاتورة نهائية: المجموع قبل الضريبة والضريبة لكل نسبة ورسم الطابع والصافي المستحق. تفتح لقطة الشاشة الكاملة.",
    "fatura.alt3": "بطاقة العميل في محرر الفواتير مع المعرّفات الضريبية (NIF وRC والمادة) المطلوبة. تفتح لقطة الشاشة الكاملة.",
    "fatura.h1": "تُخزَّن المبالغ كأعداد صحيحة من السنتيمات وتُقرَّب مرة واحدة لكل نسبة ضريبة، فتتطابق المجاميع دائمًا.",
    "fatura.h2": "الترقيم متسلسل لكل نوع مستند وكل سنة، ويُمنح في معاملة واحدة عند الإنهاء.",
    "fatura.h3": "كل شيء يعمل داخل المتصفح: تبقى البيانات في IndexedDB على جهاز المستخدم، مع نسخ احتياطي واستعادة بصيغة JSON يتم التحقق منها.",
    "fatura.h4": "اختبارات وحدات واختبارات خصائص، وسياسة أمان محتوى صارمة، وتكامل مستمر مع كل دفعة.",
    "order.h1": "متعدد المتاجر منذ البداية: كل جدول يحمل معرّف المتجر وكل استعلام مقيّد بالمتجر المسجَّل دخوله.",
    "order.h2": "أمان مستوى الصفوف مفعّل على كل جدول: الواجهة العامة لا تقرأ شيئًا، والخادم وحده يصل إلى البيانات.",
    "order.h3": "أرقام الطلبات تأتي من عدّاد يزداد في نفس معاملة الطلب، وليس بطريقة MAX+1.",
    "order.h4": "تتبع الحالة آلة حالات صارمة، وكل تغيير يكتب حدثًا في سجل الطلب.",
    "status.live": "يعمل الآن",
    "cbot.tag": "بوت تيليغرام يقيّم الزوار ويحوّل الطلبات.",
    "cbot.desc": "بوت تيليغرام يقيّم الزوار الجدد بأسئلة قصيرة موجّهة، ويجيب عن الأسئلة الشائعة، ويحوّل كل طلب إليّ. وتصل ردودي إليهم عبر البوت.",
    "cbot.b1": "أسئلة موجّهة: نوع المشروع والميزانية والموعد",
    "cbot.b2": "يجيب عن الأسئلة الشائعة بالإنجليزية والفرنسية والعربية",
    "cbot.b3": "تُرسل ردودي إلى الزائر",
    "cbot.h1": "بلا حالة بالتصميم: تنتقل الأسئلة داخل بيانات الأزرار ونص الرسائل، فلا توجد قاعدة بيانات لإدارتها.",
    "cbot.h2": "ترويسة سرية ترفض أي طلب لا يأتي من تيليغرام، ولا يستطيع تمرير الردود سوى المالك.",
    "cbot.h3": "تُنقّى أسماء الزوار قبل وصولها إلى المالك، وتُقتطع الرسائل الطويلة.",
    "cbot.h4": "اختبارات وحدات تغطي المسار ومطابقة الأسئلة الشائعة وحالات إساءة الاستخدام، ويعمل الكود كدالة واحدة بلا خادم.",
    "foot": "© 2026 حسام جرير", "title": "حسام جرير، مطوّر ويب",
    "meta.desc": "حسام جرير، مطوّر ويب. أبني تطبيقات ويب وحلول ذكاء اصطناعي: فوترة وإدارة طلبات وبوتات تيليغرام."
  }
};

const PROJECTS = {
  fatura: { link: "https://github.com/Sameeva/FaturaDZ", demo: "https://fatura-dz.vercel.app", status: "demo",
            shots: [["img/fatura-list-crop.png", "img/fatura-list.png", 520, 326],
                    ["img/fatura-invoice-crop.png", "img/fatura-invoice.png", 500, 210],
                    ["img/fatura-editor-crop.png", "img/fatura-editor.png", 552, 389]], hood: 4 },
  order:  { link: "https://github.com/Sameeva/OrderDZ", demo: null, status: "dev", shots: [], hood: 4 },
  menu:   { link: null, demo: null, status: "soon", shots: [], hood: 0 },
  cbot:   { link: "https://github.com/Sameeva/contact-bot", demo: "https://t.me/eevva_bot", demoLabel: "link.bot", status: "live", shots: [], hood: 4 }
};

const root = document.documentElement;
let lang = "en";
let openProject = null;
let lastTile = null;

const saveLang = (v) => { try { localStorage.setItem("lang", v); } catch { /* storage unavailable */ } };
const t = (k) => T[lang][k] ?? T.en[k] ?? k;

function applyLang(next, persist = false) {
  lang = T[next] ? next : "en";
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t("title");
  document.querySelector('meta[name="description"]').content = t("meta.desc");
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  renderLangMenu();
  if (openProject) fillSheet(openProject);
  if (persist) saveLang(lang);   // only remember a language the visitor chose, not one we guessed
  root.classList.remove("i18n-pending");
}

/* The inline script in <head> already chose the starting language (saved choice, else browser language)
   and set <html lang>, so that is the single source of truth here. */
const detectLang = () => (T[root.lang] ? root.lang : "en");

/* bottom sheet */
const sheet = document.getElementById("sheet");
const scrim = document.getElementById("scrim");
const grab = document.getElementById("grab");
const closeBtn = document.getElementById("sheet-close");
const link = document.getElementById("sheet-link");

function fillSheet(id) {
  const p = PROJECTS[id];
  const names = { fatura: "FaturaDZ", order: "OrderDZ", menu: "MenuDZ", cbot: "Contact bot" };
  const li = (text) => Object.assign(document.createElement("li"), { textContent: text });
  document.getElementById("sheet-title").textContent = names[id];
  const st = document.getElementById("sheet-status");
  st.textContent = t("status." + p.status);
  st.className = "status " + p.status;
  document.getElementById("sheet-desc").textContent = t(id + ".desc");
  document.getElementById("sheet-points").replaceChildren(...[1, 2, 3].map((n) => li(t(`${id}.b${n}`))));

  const shots = document.getElementById("sheet-shots");
  shots.replaceChildren(...p.shots.map(([src, full, width, height], i) => {
    const img = Object.assign(document.createElement("img"), { src, alt: t(`${id}.alt${i + 1}`), width, height, loading: "lazy" });
    const a = Object.assign(document.createElement("a"), { href: full, target: "_blank", rel: "noopener" });
    a.append(img);
    return a;
  }));
  shots.hidden = p.shots.length === 0;

  const hood = document.getElementById("sheet-hood");
  hood.replaceChildren(...Array.from({ length: p.hood }, (_, i) => li(t(`${id}.h${i + 1}`))));
  hood.hidden = document.getElementById("hood-title").hidden = p.hood === 0;

  const demo = document.getElementById("sheet-demo");
  demo.hidden = !p.demo;
  if (p.demo) { demo.href = p.demo; demo.textContent = t(p.demoLabel ?? "link.demo"); } else demo.removeAttribute("href");

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

const pageBehind = document.querySelectorAll("body > header, body > main, body > footer");
const setPageInert = (on) => pageBehind.forEach((el) => { el.inert = on; });

function openSheet(id, tile) {
  openProject = id;
  lastTile = tile;
  fillSheet(id);
  sheet.style.transform = "";
  sheet.removeAttribute("inert");
  setPageInert(true);
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
  setPageInert(false);
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
  const items = [...sheet.querySelectorAll("a[href], button")].filter((el) => el.getAttribute("aria-disabled") !== "true" && el.offsetParent !== null);
  if (!items.length) return;
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

/* language switcher: a button showing the current language, and a list of the others */
const LANGS = { en: ["EN", "English"], fr: ["FR", "Français"], ar: ["عربي", "العربية"] };
const langBox = document.getElementById("lang");
const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");

function renderLangMenu() {
  const cur = document.getElementById("lang-cur");
  cur.textContent = LANGS[lang][0];
  cur.lang = lang;
  langBtn.setAttribute("aria-label", `${t("lang.label")}: ${LANGS[lang][1]}`);
  langMenu.replaceChildren(...Object.keys(LANGS).filter((k) => k !== lang).map((k) => {
    const b = Object.assign(document.createElement("button"), { type: "button", lang: k, textContent: LANGS[k][1] });
    b.dataset.lang = k;
    return b;
  }));
}
function setLangMenu(open, refocus) {
  langMenu.hidden = !open;
  langBtn.setAttribute("aria-expanded", String(open));
  if (!open && refocus) langBtn.focus({ preventScroll: true });
}
langBtn.addEventListener("click", () => setLangMenu(langMenu.hidden));
langMenu.addEventListener("click", (e) => {
  const b = e.target.closest("button[data-lang]");
  if (!b) return;
  applyLang(b.dataset.lang, true);
  setLangMenu(false, true);
});
document.addEventListener("click", (e) => { if (!langMenu.hidden && !langBox.contains(e.target)) setLangMenu(false); });
document.addEventListener("focusin", (e) => { if (!langMenu.hidden && !langBox.contains(e.target)) setLangMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !langMenu.hidden) setLangMenu(false, true); });

applyLang(detectLang());

/* scroll reveal: content below the fold fades in once as it scrolls into view.
   Hiding is done here, not in the HTML or CSS, and only for what is off-screen, so visitors
   without JavaScript, crawlers, print and reduced-motion users always get the full page. */
(function scrollReveal() {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const targets = document.querySelectorAll(".block h2, .block > p, .block > .actions, .tile, .rows, .chips li, .foot");
  const waiting = new Set();
  const show = (el) => {
    if (!waiting.delete(el)) return;
    io.unobserve(el);
    el.classList.add("in");
    setTimeout(() => { el.classList.remove("reveal", "in"); el.style.removeProperty("--d"); }, 1600);
  };
  const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) show(e.target); }),
    { rootMargin: "0px 0px -6% 0px" });
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top < innerHeight) return;   // already on screen (or scrolled past): leave it alone
    if (el.matches(".tile, .chips li")) el.style.setProperty("--d", Math.min([...el.parentElement.children].indexOf(el) * 90, 360) + "ms");
    el.classList.add("reveal");
    waiting.add(el);
    io.observe(el);
  });
  /* at the very bottom, show whatever is left so nothing can stay hidden */
  addEventListener("scroll", () => {
    if (waiting.size && innerHeight + scrollY >= document.documentElement.scrollHeight - 4) [...waiting].forEach(show);
  }, { passive: true });
})();
