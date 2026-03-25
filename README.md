# i18next + Weblate demo

This frontend is set up to demonstrate a translator-friendly workflow:

- the React app renders strings through `i18next`
- translations live in plain JSON files under `public/locales`
- those JSON files are suitable for a Weblate component

## Local development

```bash
npm install
npm run dev
```

## Translation files

The app loads locale files at runtime from:

```text
public/locales/en/translation.json
public/locales/fr/translation.json
```

The i18next backend path is:

```text
/locales/{{lng}}/{{ns}}.json
```

That means translators can work on repository files directly instead of editing source code.

## Weblate component settings

Use these values when you create the component in Weblate:

```text
Repository URL: <your git remote for this project>
File mask: public/locales/*/translation.json
Monolingual base language file: public/locales/en/translation.json
File format: i18next JSON file v4
```

Weblate's documentation describes this as the standard setup for i18next JSON files:
https://docs.weblate.org/en/latest/formats/json.html

## Important production note

Weblate can commit translation updates to the repository for you, but the app still needs a deployment path that serves the updated JSON files. If production serves files only from a built artifact, translation changes will not appear until that artifact is redeployed.

For a no-engineer handoff workflow, you typically want one of these:

- automatic redeploy on every translation commit
- locale JSON served from a branch, CDN, or storage bucket that updates independently from the app bundle
