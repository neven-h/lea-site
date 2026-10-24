# Website-Inhalte — Fragebogen für Lea Kersting

**So geht's:** Diese ganze Datei in deinen KI-Assistenten (ChatGPT, Claude, …) einfügen und die Fragen beantworten. Das Gespräch läuft auf Deutsch. Am Ende liefert die KI alle Texte auf **Deutsch, Englisch und Französisch**.

---

## Anweisung für den KI-Assistenten

> Du hilfst Lea Kersting, Rechtsanwältin (LL.M., Paris) in Berlin, die Inhalte ihrer einseitigen Website zu erstellen. Lea ist deutsche Muttersprachlerin und spricht außerdem Englisch und Französisch.
>
> **Gesprächsführung**
> - Führe das gesamte Gespräch **auf Deutsch**.
> - Gehe die Abschnitte unten **einzeln und der Reihe nach** durch. Stelle pro Nachricht nur wenige Fragen.
> - Erfinde keine Daten, Orte, Mitgliedschaften oder Qualifikationen. Weiß Lea etwas nicht, trage `TODO` ein.
> - Formuliere aus Leas Antworten kurze, sachliche Website-Texte in der Ich-Form („Ich berate …“), ohne Werbe-Superlative, mit der Anrede „Sie“. Zeige ihr jeden Text zur Freigabe, bevor du weitermachst.
>
> **Übersetzung**
> - Erst wenn alle deutschen Texte freigegeben sind, übersetze sie ins **Englische** und ins **Französische**.
> - Übersetze sinngemäß und idiomatisch, nicht Wort für Wort. Englisch: britische Schreibweise, sachlicher Ton. Französisch: Anrede „vous“, Ton eines Pariser Anwaltsbüros.
> - Deutsche Rechtsbegriffe ohne genaue Entsprechung bleiben in Klammern stehen, z. B. „legal traineeship (Referendariat)“ / « stage juridique (Referendariat) », „Attorney at Law (Rechtsanwältin)“ / « avocate (Rechtsanwältin) ».
> - Lea spricht beide Sprachen: Bitte sie, die Übersetzungen kurz gegenzulesen.
>
> **Ausgabe am Ende**
> Gib für jede Feld-ID (z. B. `area1Desc`) einen Block in genau diesem Format aus:
>
> ```
> area1Desc
> DE: …
> EN: …
> FR: …
> ```
>
> Die Feld-IDs bleiben unverändert: Der Entwickler kopiert sie direkt in die Website. Kontakt- und Impressumsangaben (Abschnitte 1 und 2) werden nicht übersetzt; gib sie einmal als Liste aus.

---

## 1. Kontaktdaten (Bereich „Kontakt / Impressum“)

| Angabe | Aktuell auf der Website | Richtig? / neuer Wert |
|---|---|---|
| Angezeigter Name | Rechtsanwältin Lea Kersting | |
| Kanzlei / „c/o“-Zeile | — (entfernt) | |
| Straße, PLZ, Ort | **fehlt: im Impressum Pflicht** | |
| E-Mail | info@leakersting.com | |
| Telefon | +49 30 220 6616 70 | |
| Fax | +49 30 220 6616 77 (behalten oder entfernen?) | |
| LinkedIn | linkedin.com/in/lea-k-5029a7327 | |
| Terminbuchung („Termin vereinbaren“) | **fehlt:** Link zu Calendly o. Ä. | |
| Weitere Kanäle (Signal, WhatsApp)? | — | |
| Übliche Antwortzeit (z. B. „innerhalb eines Werktags“) | — | |

## 2. Impressum (Pflichtangaben nach § 5 DDG und DL-InfoV)

- Berufsbezeichnung und Staat, in dem sie verliehen wurde (Rechtsanwältin, Bundesrepublik Deutschland)
- Zuständige Rechtsanwaltskammer mit Anschrift (z. B. Rechtsanwaltskammer Berlin)
- Umsatzsteuer-ID, falls vorhanden
- Berufshaftpflichtversicherung: Name, Anschrift, räumlicher Geltungsbereich
- Berufsrechtliche Regelungen (BRAO, BORA, FAO, RVG, CCBE): meist ein Standardsatz mit Links
- Partnerin oder angestellt in der Kanzlei? Wer ist inhaltlich verantwortlich?

## 3. Startbereich (ganz oben)

- `heroTitleHtml`: Überschrift. Aktuell: „Deutsches Recht, klar erklärt. In Ihrer Sprache.“ Beibehalten oder eigener Vorschlag?
- `heroLede`: ein Satz dazu, was du machst und für wen. Aktuell: „Vertragsrecht und Arbeitsrecht für internationale und französischsprachige Mandantinnen und Mandanten. Rechtsanwältin, LL.M. (Paris) — Berlin.“

## 4. Tätigkeitsbereiche

Für **jeden** Bereich ein Titel und 1–2 Sätze dazu, was du dort machst und für wen (Arbeitnehmer oder Arbeitgeber, Privatpersonen oder Unternehmen). Die drei Platzhalter bestätigen, umbenennen oder ersetzen:

| ID | Aktueller Titel | Dein Titel + Beschreibung |
|---|---|---|
| `area1Title` / `area1Desc` | Vertragsrecht | |
| `area2Title` / `area2Desc` | Arbeitsrecht | |
| `area3Title` / `area3Desc` | Streitigkeiten & Forderungen | |

- Fehlt ein Bereich (z. B. Handelsrecht, Start-ups, Mietrecht)? Gibt es etwas, das du **nicht** übernehmen möchtest?
- `areasSub`: Wer sind deine typischen Mandanten? Aktuell: „Für Privatpersonen, Gründerinnen und Gründer sowie Unternehmen in Deutschland.“

## 5. Über mich

- `about1`: 2–3 Sätze dazu, wer du bist und worauf du dich konzentrierst.
- `about2`: wie du mit Mandanten arbeitest (direkter Kontakt, Einschätzung von Fällen, Kostentransparenz).
- `quote`: ein Satz in deinen eigenen Worten. Aktuell: „Sie sprechen direkt mit mir — und ich sage Ihnen ehrlich, wenn sich ein Streit nicht lohnt.“
- Sprachen und Niveau (Deutsch Muttersprache, Englisch, Französisch, weitere?)

## 6. Ausbildung & Werdegang (genaue Jahre und Orte)

| ID | Station | Jahr(e) | Ort / Institution |
|---|---|---|---|
| `c1` | Aktuelle Tätigkeit (seit wann, welche Kanzlei) | | |
| `c2` | Zulassung zur Rechtsanwaltschaft | | |
| `c3` | LL.M. (welche Universität in Paris, Schwerpunkt, Thema der Abschlussarbeit?) | | |
| — | Zweites Staatsexamen | | |
| `c4` | Referendariat: Stationen (Gericht, Staatsanwaltschaft, Kanzlei, Ausland?) | | |
| — | Erstes Staatsexamen | | |
| `c5` | Studium: Universität(en), Auslandssemester | | |
| — | Frühere Tätigkeiten oder Praktika, die erwähnt werden sollen | | |
| — | Mitgliedschaften, Veröffentlichungen, Lehrtätigkeit, Auszeichnungen | | |

## 7. Foto

- Ist das aktuelle Porträt endgültig? Muss der Fotograf genannt werden?

## 8. Rechtliche Seiten (Links in der Fußzeile)

- Datenschutzerklärung: Wer hostet die Website? Nutzt du Calendly, ein Kontaktformular oder Analyse-Tools? Ein Generator wie e-recht24 braucht diese Angaben.
- Cookies: Die Website setzt derzeit **keine Cookies**. Bleibt das so, können die Links „Cookie-Richtlinie“ und „Cookie-Einstellungen“ entfallen.

---

*Die Feld-IDs entsprechen `script.js`. Die fertigen Antworten zurückschicken, dann kommen sie direkt auf die Website.*
