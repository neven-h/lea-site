// Keys ending in "Html" are set with innerHTML (they carry <br>/<em>); all others as text.
// FR falls back to EN until French copy exists.
const I18N = {
    de: {
      navHome: "Start", navAreas: "Tätigkeitsbereiche", navAbout: "Über mich", navContact: "Kontakt",
      heroTitleHtml: "Deutsches Recht,<br>klar erklärt.<br><em>In Ihrer Sprache.</em>",
      heroLede: "Vertragsrecht und Arbeitsrecht für internationale und französischsprachige Mandantinnen und Mandanten. Rechtsanwältin, LL.M. (Paris) — Berlin.",
      cta: "Termin vereinbaren", email: "E-Mail schreiben",
      areasTitle: "Tätigkeitsbereiche",
      areasSub: "Für Privatpersonen, Gründerinnen und Gründer sowie Unternehmen in Deutschland.",
      area1Title: "Vertragsrecht",
      area1Desc: "Ich entwerfe und prüfe Verträge vor der Unterschrift und setze Ansprüche durch oder wehre sie ab, wenn eine Vereinbarung nicht eingehalten wird.",
      area2Title: "Arbeitsrecht",
      area2Desc: "Kündigung, Abmahnung, Abfindung, Arbeitsverträge und Aufhebungsverträge — für Arbeitnehmer und Arbeitgeber.",
      area3Title: "Streitigkeiten & Forderungen",
      area3Desc: "Eine Zahlungsaufforderung oder ein Anspruch gegen Sie? Ich prüfe, ob er Bestand hat, und vertrete Sie außergerichtlich und vor Gericht.",
      quote: "„Sie sprechen direkt mit mir — und ich sage Ihnen ehrlich, wenn sich ein Streit nicht lohnt.“",
      about1: "Ich bin Rechtsanwältin mit einem LL.M. aus Paris und berate internationale und französischsprachige Mandantinnen und Mandanten im deutschen Vertrags- und Arbeitsrecht.",
      about2: "Von der ersten Einschätzung bis zum außergerichtlichen oder gerichtlichen Verfahren haben Sie eine Ansprechpartnerin und eine klare Grundlage für jede Entscheidung.",
      careerTitle: "Werdegang",
      c1Date: "Seit [JAHR]", c1: "Rechtsanwältin, [KANZLEI], Berlin", c2: "Zulassung zur Rechtsanwaltschaft",
      c3: "LL.M., [UNIVERSITÄT], Paris", c4: "Referendariat, [ORTE]", c5: "Studium der Rechtswissenschaft, [UNIVERSITÄT]",
      contactTitleHtml: "Sprechen wir über <em>Ihren Fall.</em>",
      fImprint: "Impressum", fPrivacy: "Datenschutz", fCookies: "Cookie-Richtlinie", fCookieSettings: "Cookie-Einstellungen"
    },
    en: {
      navHome: "Home", navAreas: "Areas of practice", navAbout: "About me", navContact: "Contact",
      heroTitleHtml: "German law,<br>clearly explained.<br><em>In your language.</em>",
      heroLede: "Contract and employment law for international and French-speaking clients. German Attorney at Law (Rechtsanwältin), LL.M. (Paris) — Berlin.",
      cta: "Book an appointment", email: "Send an email",
      areasTitle: "Areas of practice",
      areasSub: "For private clients, founders and companies doing business in Germany.",
      area1Title: "Contract law",
      area1Desc: "Drafting and reviewing contracts before you sign, and enforcing or defending claims when an agreement is not honoured.",
      area2Title: "Employment law",
      area2Desc: "Dismissals, warnings, severance, employment contracts and settlement agreements — for employees and employers.",
      area3Title: "Disputes & claims",
      area3Desc: "A payment demand or a claim against you? I check whether it holds up and represent you out of court and in court.",
      quote: "“You speak with me directly — and I tell you honestly when a dispute is not worth it.”",
      about1: "I am a German attorney at law with an LL.M. from Paris, advising international and French-speaking clients on German contract and employment law.",
      about2: "From the first assessment to out-of-court or court proceedings, you have one contact and a clear basis for each decision.",
      careerTitle: "Career",
      c1Date: "Since [YEAR]", c1: "Attorney at law, [FIRM], Berlin", c2: "Admitted to the bar",
      c3: "LL.M., [UNIVERSITY], Paris", c4: "Legal traineeship (Referendariat), [PLACES]", c5: "Law studies, [UNIVERSITY]",
      contactTitleHtml: "Let’s talk about <em>your case.</em>",
      fImprint: "Imprint", fPrivacy: "Privacy Policy", fCookies: "Cookie Policy", fCookieSettings: "Cookie settings"
    }
  };
  I18N.fr = I18N.en;

  function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!I18N[lang][key]) return;
      if (key.endsWith('Html')) el.innerHTML = I18N[lang][key];
      else el.textContent = I18N[lang][key];
    });
    document.querySelectorAll('.lang button').forEach(b =>
      b.setAttribute('aria-pressed', b.dataset.lang === lang));
  }
  document.querySelectorAll('.lang button').forEach(b =>
    b.addEventListener('click', () => setLang(b.dataset.lang)));
  setLang('de');
