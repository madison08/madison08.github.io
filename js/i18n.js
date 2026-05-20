// Internationalization (i18n) System
const translations = {
  fr: {
    badge: "Available to build something great",
    hero_greeting: "Salut.",
    description_1_part1: "Je suis un développeur Fullstack. Vous pouvez retrouver la plupart de mes travaux sur ",
    description_1_part2: ". Vous trouverez également mon parcours et d'autres infos sur ",
    description_2: "En dehors de la programmation, j'aime le football, les animes japonais, le design et la photographie.",
    description_3: "C'est tout je crois :-) . Merci !",
    btn_whatsapp: "Me Contacter",
    terminal_path: "~/madison-attobra",
    terminal_command: "cat profile.json",
    terminal_role: '"Développeur Fullstack"',
    terminal_interests: '"football"',
    terminal_photography: '"photographie"',
    terminal_content: '"Creation de contenu"'
  },
  en: {
    badge: "Available to build something great",
    hero_greeting: "Hi, I'm ",
    description_1_part1: "I am a Fullstack Developer. You can find most of my work on ",
    description_1_part2: ". You can also find my resume and other info on ",
    description_2: "Outside of programming, I like football, Japanese anime, design, and photography.",
    description_3: "That's all I think :-) . Thank you!",
    btn_whatsapp: "WhatsApp Me",
    terminal_path: "~/madison-attobra",
    terminal_command: "cat profile.json",
    terminal_role: '"Fullstack Developer"',
    terminal_interests: '"football"',
    terminal_photography: '"photography"',
    terminal_content: '"Content Creation"'
  },
  ja: {
    badge: "素晴らしいものを作る準備ができています",
    hero_greeting: "こんにちは。",
    description_1_part1: "フルスタックデベロッパーです。私の作品のほとんどは",
    description_1_part2: "で見つけることができます。私の経歴やその他の情報は",
    description_2: "プログラミング以外では、サッカー、日本のアニメ、デザイン、写真が好きです。",
    description_3: "これで全部だと思います :-)。ありがとうございます！",
    btn_whatsapp: "WhatsAppで連絡",
    terminal_path: "~/madison-attobra",
    terminal_command: "cat profile.json",
    terminal_role: '"フルスタックデベロッパー"',
    terminal_interests: '"サッカー"',
    terminal_photography: '"写真"',
    terminal_content: '"コンテンツ作成"'
  }
};

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  applyLanguage(lang);
  updateLanguageButtons(lang);
}

function applyLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
}

function updateLanguageButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

function detectLanguage() {
  const savedLang = localStorage.getItem('language');
  if (savedLang && translations[savedLang]) {
    return savedLang;
  }
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('fr')) {
    return 'fr';
  }
  if (browserLang.startsWith('ja')) {
    return 'ja';
  }
  return 'en';
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = detectLanguage();
  setLanguage(currentLang);
});

// Make functions globally available for HTML onclick handlers
window.setLanguage = setLanguage;