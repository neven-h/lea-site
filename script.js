const I18N = {
    de: { nav: "Kontakt", role: "Rechtsanwältin, LL.M. (Paris)",
      areas: "Deutsches Vertragsrecht und Arbeitsrecht — Beratung internationaler und französischsprachiger Mandantinnen und Mandanten",
      imprintTitle: 'Impressum / <em>Kontakt</em>', cta: "Termin vereinbaren" },
    en: { nav: "Contact", role: "German Attorney at Law (Rechtsanwältin), LL.M. (Paris)",
      areas: "German contract law and employment law — advising international and French-speaking clients",
      imprintTitle: 'Imprint / <em>Contact</em>', cta: "Book an appointment" },
    fr: { nav: "Contact", role: "Avocate en Allemagne (Rechtsanwältin), LL.M. (Paris)",
      areas: "Droit allemand des contrats et droit du travail — conseil aux clients internationaux et francophones",
      imprintTitle: 'Mentions légales / <em>Contact</em>', cta: "Prendre rendez-vous" }
  };
  function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!I18N[lang][key]) return;
      if (key === 'imprintTitle') el.innerHTML = I18N[lang][key];
      else el.textContent = I18N[lang][key];
    });
    document.getElementById('langBtn').innerHTML = lang.toUpperCase() + ' <span aria-hidden="true">\u25BE</span>';
    document.querySelectorAll('.lang-dd-menu button').forEach(b =>
      b.setAttribute('aria-selected', b.dataset.lang === lang));
  }
  const ddBtn = document.getElementById('langBtn');
  const ddMenu = document.querySelector('.lang-dd-menu');
  function toggleMenu(open) { ddMenu.hidden = !open; ddBtn.setAttribute('aria-expanded', open); }
  ddBtn.addEventListener('click', () => toggleMenu(ddMenu.hidden));
  document.addEventListener('click', e => { if (!e.target.closest('.lang-dd')) toggleMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleMenu(false); });
  ddMenu.querySelectorAll('button').forEach(b =>
    b.addEventListener('click', () => { setLang(b.dataset.lang); toggleMenu(false); }));
  setLang('de');
