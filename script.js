const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const languageToggle = document.querySelector('.language-toggle');
const themeToggle = document.querySelector('.theme-toggle');
const musicToggle = document.querySelector('.music-toggle');
const ambientAudio = document.querySelector('.ambient-audio');

const translations = {
  ar: {
    'meta[name="description"]': 'الحقيبة المهنية لأحمد علي عقله النبهان — إدارة الأعمال والمبيعات، الخدمات المكتبية، والتدريب الحاسوبي.',
    title: 'أحمد علي عقله النبهان | حقيبة مهنية',
    '.brand-copy small': 'حقيبة مهنية',
    '.site-nav a': ['الرئيسية', 'نبذة عني', 'الخبرات', 'المؤهلات', 'الأعمال', 'تواصل معي <span aria-hidden="true">↗</span>'],
    '.hero .eyebrow': '<span></span> ملف مهني شخصي · الأردن',
    '.hero h1': 'أحوّل الخبرة اليومية<br /><em>إلى أثرٍ مهني.</em>',
    '.hero-intro': 'أنا <strong>أحمد علي عقله النبهان</strong> — أعمل في إدارة الأعمال والمبيعات، وأدير مكتبتي الخاصة، وأقدّم التدريب الحاسوبي بأسلوب عملي قريب من الناس.',
    '.button-primary': 'استكشف أعمالي <span aria-hidden="true">←</span>',
    '.button-quiet': 'تعرّف إليّ <span aria-hidden="true">↓</span>',
    '.hero-facts strong': ['2024', 'ICDL', 'الأردن', '25/10/2001'],
    '.hero-facts span': ['سنة التخرج', 'تدريب حاسوبي', 'الرمثا · الشجرة', 'تاريخ الميلاد'],
    '.portrait-label span:last-child': 'متاح للتعاون المهني',
    '.note-top span:last-child': 'التزام<br /><b>بالتفاصيل</b>',
    '.note-bottom span:last-child': 'خبرة عملية<br /><b>قابلة للتطبيق</b>',
    '.scroll-cue span': 'اكتشف الحقيبة',
    '#about .eyebrow': '<span></span> نبذة عني',
    '#about .section-heading h2': 'شخصية عملية،<br /><em>وعقلية تتطور.</em>',
    '.about-statement .lead': 'خريج بكالوريوس في اللغة العربية، أمتلك خبرة عملية في إدارة الأعمال والبيع والشراء وإدارة مكتبة خاصة، بالإضافة إلى تقديم دورات تدريبية في الطباعة والرخصة الدولية لقيادة الحاسوب <b>(ICDL)</b>.',
    '.about-statement > p:nth-of-type(2)': 'أتميّز بقوة الشخصية والثقة بالنفس، والقدرة على تحمل ضغط العمل، ومهارات تواصل جيدة. أسعى إلى تطوير مهاراتي وخبراتي المهنية والمساهمة بفعالية في بيئة عمل احترافية تُقدّر المبادرة والإنجاز.',
    '.signature-line small': 'إدارة · تدريب · خدمة',
    '.quote-card p': 'أفضل الأعمال هي التي تترك معرفةً أو خدمةً أو فرصةً أفضل مما كانت عليه.',
    '.quote-card small': 'مبدأ أعمل به',
    '.mini-stat span': 'مجالات أتنقّل بينها<br />بمرونة وشغف',
    '#experience .eyebrow': '<span></span> الخبرات العملية',
    '#experience .section-heading h2': 'أعرف كيف تتحول<br /><em>المهام إلى نتائج.</em>',
    '#experience .section-note': 'خبرة مبنية على التعامل المباشر مع الأعمال والعملاء والمتدربين، وعلى فهم احتياجات كل موقف.',
    '.experience-copy h3': ['إدارة الأعمال والبيع والشراء', 'إدارة المكتبة والخدمات المكتبية', 'التدريب الحاسوبي'],
    '.experience-copy p': ['إدارة عمليات البيع والشراء في مجالات متنوعة، مع متابعة التفاصيل وبناء تعامل مهني يحافظ على الثقة ويبحث عن القيمة.', 'إدارة مكتبة خاصة وتقديم خدمات مكتبية متنوعة، من تجهيز المستندات والطباعة إلى مساعدة الزوار في الوصول إلى ما يحتاجونه.', 'تقديم دورات تدريبية في الطباعة والرخصة الدولية لقيادة الحاسوب، مع تبسيط المهارة وتحويلها إلى ممارسة قابلة للاستخدام.'],
    '.tag-row': [['إدارة', 'تفاوض', 'متابعة'], ['مكتبة خاصة', 'خدمات مكتبية', 'تنظيم'], ['طباعة', 'ICDL', 'تدريب']],
    '#credentials .eyebrow': '<span></span> المؤهلات والشهادات',
    '#credentials .section-heading h2': 'أساس معرفي،<br /><em>ومهارات موثقة.</em>',
    '.education-card .card-kicker': 'التعليم',
    '.education-card h3': 'بكالوريوس اللغة العربية وآدابها',
    '.education-card p': 'تخصص يجمع بين الدقة اللغوية، قراءة المعنى، والقدرة على التعبير الواضح.',
    '.year-badge small': 'سنة التخرج',
    '.cert-list .card-kicker': 'الشهادات والدورات',
    '.cert-row strong': ['شهادة الطباعة', 'الرخصة الدولية لقيادة الحاسوب (ICDL)'],
    '.cert-row small': ['مهارة عملية في تجهيز النصوص والمستندات', 'تدريب وممارسة في تطبيقات الحاسوب الأساسية'],
    '.text-link': 'عرض السيرة الذاتية الكاملة <span>←</span>',
    '#skills .eyebrow': '<span></span> المهارات واللغات',
    '#skills .section-heading h2': 'أدواتي في<br /><em>كل يوم عمل.</em>',
    '.skills-panel .panel-title span': 'المهارات الشخصية',
    '.skill-item strong': ['قوة الشخصية والثقة بالنفس', 'تحمل ضغط العمل', 'الاستماع والتحدث', 'إجادة استخدام الحاسوب'],
    '.skill-item small': ['حضور متزن في المواقف المختلفة', 'تركيز واستمرارية عند ازدحام المهام', 'تواصل واضح ومباشر مع الآخرين', 'تطبيق عملي في الخدمات والتدريب'],
    '.language-panel .panel-title span': 'اللغات',
    '.language-head strong': ['العربية', 'الإنجليزية'],
    '.language-head span': ['ممتاز', 'مقبول'],
    '.language-note p': 'لغة التعبير والعمل الأساسية',
    '.work-heading .eyebrow': '<span></span> الأعمال والمواد المهنية',
    '.work-heading h2': 'نماذج من<br /><em>المسار المهني.</em>',
    '.work-heading .section-note': 'مساحة مختارة للمواد المرتبطة بالسيرة والتدريب والعمل المكتبي. افتح أي مادة لمشاهدتها من Drive.',
    '.filter-label': ['الكل', 'الصور', 'الفيديوهات', 'أخرى'],
    '.work-type': ['ملف مهني', 'نسخة ATS', 'تدريب حاسوبي', 'عرض تقديمي', 'فيديو تدريبي', 'هوية بصرية', 'خدمات مكتبية', 'تصميم تجاري', 'تصميم واجهة', 'رابط الحقيبة'],
    '.course-small': 'مهارات الحاسوب<br />بطريقة عملية',
    '.deck-title': 'التدريب<br />المهني',
    '.work-bottom h3': ['السيرة الذاتية', 'السيرة الذاتية المتوافقة مع ATS', 'دورة ICDL الاحترافية', 'مادة عرض تدريبية', 'دورة مدخل البيانات', 'شعار مكتبة اقرأ', 'هوية الخدمات المكتبية', 'تصميم مكتبة اقرأ', 'تصميم صفحة العمل الخاص', 'QR الحقيبة المهنية'],
    '.work-bottom p': ['الملف المهني الكامل · PDF', 'نسخة مهنية مختصرة · PDF', 'مادة تدريبية · PDF', 'عرض تقديمي · Google Slides', 'تدريب عملي · فيديو MP4', 'هوية بصرية · تصميم شعار', 'تصميم شعار · خدمات مكتبية إلكترونية', 'تصميم دعائي · كل ما تحتاجه بمكان واحد', 'تصميم صفحة · عرض بصري', 'رمز وصول سريع · مشاركة الحقيبة'],
    '#contact .eyebrow': '<span></span> لنبقَ على تواصل',
    '#contact h2': 'لديك فكرة أو<br /><em>فرصة مناسبة؟</em>',
    '#contact .contact-copy > p:last-child': 'يسعدني التعرّف إلى فرص التعاون والعمل التي تستفيد من خبرتي في الإدارة، الخدمات المكتبية، والتدريب الحاسوبي.',
    '.contact-row small': ['الهاتف', 'البريد الإلكتروني', 'الموقع'],
    '.contact-row strong': ['+962 79 192 8126', 'aalnbhan18@gmail.com', 'الأردن · الرمثا · قرية الشجرة'],
    '.site-footer p': 'حقيبة مهنية شخصية · 2026',
    '.site-footer > a': 'العودة للأعلى ↑'
  },
  en: {
    'meta[name="description"]': 'The professional portfolio of Ahmad Ali Alnbhan — business and sales management, office services, and computer training.',
    title: 'Ahmad Ali Alnbhan | Professional Portfolio',
    '.brand-copy small': 'Professional Portfolio',
    '.site-nav a': ['Home', 'About', 'Experience', 'Credentials', 'Work', 'Contact me <span aria-hidden="true">↗</span>'],
    '.hero .eyebrow': '<span></span> Personal Portfolio · Jordan',
    '.hero h1': 'Turning everyday experience<br /><em>into professional impact.</em>',
    '.hero-intro': 'I am <strong>Ahmad Ali Alnbhan</strong> — working across business and sales management, running my own library, and delivering practical computer training that stays close to people.',
    '.button-primary': 'Explore my work <span aria-hidden="true">→</span>',
    '.button-quiet': 'About me <span aria-hidden="true">↓</span>',
    '.hero-facts strong': ['2024', 'ICDL', 'Jordan', '25/10/2001'],
    '.hero-facts span': ['Graduation year', 'Computer training', 'Al-Ramtha · Al-Shajara', 'Date of birth'],
    '.portrait-label span:last-child': 'Open to professional collaboration',
    '.note-top span:last-child': 'Committed<br /><b>to detail</b>',
    '.note-bottom span:last-child': 'Practical experience<br /><b>that delivers</b>',
    '.scroll-cue span': 'Discover the portfolio',
    '#about .eyebrow': '<span></span> About me',
    '#about .section-heading h2': 'A practical mindset,<br /><em>always evolving.</em>',
    '.about-statement .lead': 'A Bachelor of Arabic Language graduate with practical experience in business management, buying and selling, and running a private library — alongside delivering training in typing and the International Computer Driving Licence <b>(ICDL)</b>.',
    '.about-statement > p:nth-of-type(2)': 'I bring confidence, resilience under pressure, and strong communication skills. I am committed to developing my professional capabilities and contributing meaningfully to a workplace that values initiative and results.',
    '.signature-line small': 'Management · Training · Service',
    '.quote-card p': 'The best work leaves behind better knowledge, service, or opportunity than it found.',
    '.quote-card small': 'A principle I work by',
    '.mini-stat span': 'fields I move between<br />with flexibility and drive',
    '#experience .eyebrow': '<span></span> Professional experience',
    '#experience .section-heading h2': 'I know how to turn<br /><em>tasks into outcomes.</em>',
    '#experience .section-note': 'Built through direct work with businesses, customers, and trainees — and a clear understanding of what each situation needs.',
    '.experience-copy h3': ['Business, buying & selling', 'Library & office services', 'Computer training'],
    '.experience-copy p': ['Managing buying and selling activities across different areas, following the details and building professional relationships rooted in trust and value.', 'Running a private library and delivering practical office services, from document preparation and printing to helping visitors find what they need.', 'Delivering training in typing and ICDL, simplifying each skill and turning it into a usable daily practice.'],
    '.tag-row': [['Management', 'Negotiation', 'Follow-through'], ['Private library', 'Office services', 'Organization'], ['Typing', 'ICDL', 'Training']],
    '#credentials .eyebrow': '<span></span> Credentials & education',
    '#credentials .section-heading h2': 'A knowledge base,<br /><em>with proven skills.</em>',
    '.education-card .card-kicker': 'Education',
    '.education-card h3': 'Bachelor of Arabic Language & Literature',
    '.education-card p': 'A field that combines linguistic precision, reading meaning, and the ability to communicate clearly.',
    '.year-badge small': 'Graduation year',
    '.cert-list .card-kicker': 'Certificates & courses',
    '.cert-row strong': ['Typing Certificate', 'International Computer Driving Licence (ICDL)'],
    '.cert-row small': ['Practical skill in preparing text and documents', 'Training and practice in essential computer applications'],
    '.text-link': 'View the full CV <span>→</span>',
    '#skills .eyebrow': '<span></span> Skills & languages',
    '#skills .section-heading h2': 'The tools I use<br /><em>every working day.</em>',
    '.skills-panel .panel-title span': 'Personal skills',
    '.skill-item strong': ['Confidence & presence', 'Working under pressure', 'Listening & speaking', 'Computer proficiency'],
    '.skill-item small': ['A balanced presence in different situations', 'Focus and consistency when tasks pile up', 'Clear, direct communication with others', 'Hands-on use in services and training'],
    '.language-panel .panel-title span': 'Languages',
    '.language-head strong': ['Arabic', 'English'],
    '.language-head span': ['Excellent', 'Intermediate'],
    '.language-note p': 'Primary language for work and expression',
    '.work-heading .eyebrow': '<span></span> Work & professional materials',
    '.work-heading h2': 'Selected pieces from<br /><em>the professional path.</em>',
    '.work-heading .section-note': 'A curated space for materials connected to my CV, training, and office work. Open any item to view it in Drive.',
    '.filter-label': ['All', 'Images', 'Videos', 'Other'],
    '.work-type': ['Professional file', 'ATS resume', 'Computer training', 'Presentation', 'Training video', 'Visual identity', 'Office services', 'Commercial design', 'Interface design', 'Portfolio link'],
    '.course-small': 'Computer skills<br />made practical',
    '.deck-title': 'Professional<br />training',
    '.work-bottom h3': ['Curriculum Vitae', 'ATS-friendly Resume', 'Professional ICDL Course', 'Training Presentation', 'Data Entry Course', 'Iqra Library Logo', 'Office Services Identity', 'Iqra Library Design', 'Private Work Page Design', 'Portfolio QR Code'],
    '.work-bottom p': ['Complete professional file · PDF', 'Concise professional version · PDF', 'Training material · PDF', 'Presentation · Google Slides', 'Practical training · MP4 video', 'Visual identity · Logo design', 'Logo design · Digital office services', 'Promotional design · Everything in one place', 'Page design · Visual showcase', 'Quick access · Share the portfolio'],
    '#contact .eyebrow': '<span></span> Let’s connect',
    '#contact h2': 'Have an idea or<br /><em>the right opportunity?</em>',
    '#contact .contact-copy > p:last-child': 'I would be glad to explore opportunities and collaborations that benefit from my experience in management, office services, and computer training.',
    '.contact-row small': ['Phone', 'Email', 'Location'],
    '.contact-row strong': ['+962 79 192 8126', 'aalnbhan18@gmail.com', 'Jordan · Al-Ramtha · Al-Shajara'],
    '.site-footer p': 'Personal professional portfolio · 2026',
    '.site-footer > a': 'Back to top ↑'
  }
};

let currentLanguage = 'ar';

function applyLanguage(language) {
  currentLanguage = language;
  const content = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = content.title;
  document.querySelector('meta[name="description"]').setAttribute('content', content['meta[name="description"]']);
  languageToggle.textContent = language === 'ar' ? 'EN' : 'عربي';
  languageToggle.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  themeToggle.setAttribute('aria-label', document.body.classList.contains('light-mode')
    ? (language === 'ar' ? 'تفعيل الوضع الليلي' : 'Enable dark mode')
    : (language === 'ar' ? 'تفعيل الوضع النهاري' : 'Enable light mode'));
  musicToggle.querySelector('.music-label').textContent = language === 'ar' ? 'معزوفة عربية' : 'Arabic oud';
  musicToggle.setAttribute('aria-label', ambientAudio?.paused
    ? (language === 'ar' ? 'تشغيل المعزوفة العربية' : 'Play Arabic oud music')
    : (language === 'ar' ? 'إيقاف المعزوفة العربية' : 'Pause Arabic oud music'));
  document.querySelector('.brand').setAttribute('aria-label', language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Back to home');
  document.querySelector('.menu-toggle').setAttribute('aria-label', language === 'ar' ? 'فتح القائمة' : 'Open menu');
  document.querySelector('.site-nav').setAttribute('aria-label', language === 'ar' ? 'التنقل الرئيسي' : 'Main navigation');
  document.querySelector('.hero-visual').setAttribute('aria-label', language === 'ar' ? 'صورة أحمد علي عقله النبهان' : 'Portrait of Ahmad Ali Alnbhan');
  document.querySelector('.portrait-frame img').alt = language === 'ar' ? 'أحمد علي عقله النبهان بملابس مهنية' : 'Ahmad Ali Alnbhan in professional attire';
  document.querySelector('.scroll-cue').setAttribute('aria-label', language === 'ar' ? 'انتقل إلى نبذة عني' : 'Go to the about section');

  Object.entries(content).forEach(([selector, value]) => {
    if (selector === 'title' || selector.startsWith('meta')) return;
    const elements = [...document.querySelectorAll(selector)];
    if (Array.isArray(value) && selector !== '.tag-row') {
      elements.forEach((element, index) => { if (value[index] !== undefined) element.innerHTML = value[index]; });
    } else if (selector === '.tag-row') {
      elements.forEach((element, index) => {
        if (value[index]) element.innerHTML = value[index].map((tag) => `<span>${tag}</span>`).join('');
      });
    } else {
      elements.forEach((element) => { element.innerHTML = value; });
    }
  });
}

languageToggle?.addEventListener('click', () => applyLanguage(currentLanguage === 'ar' ? 'en' : 'ar'));

const workFilters = [...document.querySelectorAll('.work-filter')];
const workCards = [...document.querySelectorAll('.work-card[data-category]')];
const applyWorkFilter = (filter) => {
  workFilters.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  workCards.forEach((card) => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
};
workFilters.forEach((button) => button.addEventListener('click', () => applyWorkFilter(button.dataset.filter)));

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-mode', isLight);
  themeToggle.innerHTML = `<span aria-hidden="true">${isLight ? '☾' : '☼'}</span>`;
  themeToggle.setAttribute('aria-label', isLight
    ? (currentLanguage === 'ar' ? 'تفعيل الوضع الليلي' : 'Enable dark mode')
    : (currentLanguage === 'ar' ? 'تفعيل الوضع النهاري' : 'Enable light mode'));
  localStorage.setItem('ahmad-theme', isLight ? 'light' : 'dark');
}

themeToggle?.addEventListener('click', () => {
  applyTheme(document.body.classList.contains('light-mode') ? 'dark' : 'light');
});

ambientAudio.volume = 0.16;
musicToggle?.addEventListener('click', async () => {
  if (ambientAudio.paused) {
    try {
      await ambientAudio.play();
      musicToggle.classList.add('is-playing');
      musicToggle.setAttribute('aria-pressed', 'true');
    } catch (error) {
      musicToggle.classList.remove('is-playing');
    }
  } else {
    ambientAudio.pause();
    musicToggle.classList.remove('is-playing');
    musicToggle.setAttribute('aria-pressed', 'false');
  }
  musicToggle.setAttribute('aria-label', ambientAudio.paused
    ? (currentLanguage === 'ar' ? 'تشغيل المعزوفة العربية' : 'Play Arabic oud music')
    : (currentLanguage === 'ar' ? 'إيقاف المعزوفة العربية' : 'Pause Arabic oud music'));
});

applyTheme(localStorage.getItem('ahmad-theme') || 'dark');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const updateActiveLink = () => {
  const marker = window.scrollY + 150;
  let current = sections[0]?.id;
  sections.forEach((section) => {
    if (marker >= section.offsetTop) current = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
