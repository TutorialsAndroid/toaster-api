# Toaster API 🍞🔥

> Fresh random fun, popped hot from a CDN.

**Toaster API** is a lightweight, open-source, static JSON API that serves fun developer jokes, quotes, facts, roasts, motivation lines, and mixed toast content.

It is designed to be hosted for free on **GitHub**, delivered globally through **jsDelivr CDN**, and documented with **GitHub Pages**.

---

## ⚠️ Important: Static CDN API

This project is a **static API**, not a backend server.

That means:

✅ Works on GitHub  
✅ Works on jsDelivr CDN  
✅ Works on GitHub Pages  
✅ No server required  
✅ No database required  
✅ Very fast for public read-only data  

But:

❌ No real POST requests  
❌ No dynamic `/random` server endpoint  
❌ No authentication  
❌ No database writes  
❌ No secret keys  

For randomness, the API provides JSON collections and a small JavaScript client that randomly picks one item on the client side.

---

## Live URL Format

Replace:

```text
TutorialsAndroid
```

with your GitHub username or organization, and:

```text
toaster-api
```

with your repository name.

### Recommended Production CDN URL

```text
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@1.0.0/api/v1/index.json
```

### Latest Main Branch URL

```text
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/index.json
```

### GitHub Pages URL

```text
https://TutorialsAndroid.github.io/toaster-api/
```

---

## API Base URLs

### jsDelivr CDN

```text
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1
```

### GitHub Pages

```text
https://TutorialsAndroid.github.io/toaster-api/api/v1
```

---

## Endpoints

| Endpoint | Description |
|---|---|
| `/index.json` | API information, version, endpoints |
| `/meta.json` | Project metadata |
| `/toasts.json` | Toast-style fun one-liners |
| `/jokes.json` | Developer and general jokes |
| `/quotes.json` | Fun and motivational quotes |
| `/facts.json` | Interesting small facts |
| `/roasts.json` | Friendly roast lines |
| `/motivation.json` | Motivational lines |
| `/mixed.json` | Combined mixed content |
| `/schema.json` | JSON response schema |

---

## Example Request

```javascript
fetch("https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/jokes.json")
  .then(response => response.json())
  .then(data => {
    console.log(data.items);
  });
```

---

## Example Response

```json
{
  "meta": {
    "name": "Toaster API",
    "version": "1.0.0",
    "endpoint": "jokes",
    "updated_at": "2026-05-26"
  },
  "count": 5,
  "items": [
    {
      "id": "joke-001",
      "type": "joke",
      "category": "developer",
      "content": "Why did the developer go broke? Because he used up all his cache.",
      "tags": ["developer", "programming", "fun"],
      "language": "en",
      "safe": true
    }
  ]
}
```

---

## Random Item Using JavaScript Client

### Browser Usage

```html
<script src="https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/clients/toaster.js"></script>

<script>
  const toaster = new ToasterAPI();

  toaster.random("jokes").then(item => {
    console.log(item.content);
  });
</script>
```

### JavaScript Module Usage

```javascript
const toaster = new ToasterAPI({
  baseUrl: "https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1"
});

const joke = await toaster.random("jokes");
console.log(joke.content);
```

---

## Android Java Usage

```java
String url = "https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/jokes.json";
```

You can fetch this URL using Retrofit, OkHttp, Volley, or Android's built-in networking APIs.

---

## Versioning Strategy

Use Git tags for stable API releases:

```bash
git tag 1.0.0
git push origin 1.0.0
```

Then use this CDN URL:

```text
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@1.0.0/api/v1/index.json
```

Use `@main` only for development/testing. Use version tags like `@1.0.0` for production apps.

---

## Cache Notes

jsDelivr aggressively caches static version and commit-based URLs. For production apps, this is good because your API data becomes stable and fast.

Recommended pattern:

```text
Development: @main
Production:  @1.0.0
```

When you update API data, create a new version tag:

```bash
git add .
git commit -m "Add new toaster API content"
git tag 1.0.1
git push origin main --tags
```

Then update apps/sites to:

```text
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@1.0.1/api/v1/index.json
```

---

## Project Structure

```text
toaster-api/
├── .github/
│   └── workflows/
│       └── validate-json.yml
├── api/
│   └── v1/
│       ├── facts.json
│       ├── index.json
│       ├── jokes.json
│       ├── meta.json
│       ├── mixed.json
│       ├── motivation.json
│       ├── quotes.json
│       ├── roasts.json
│       ├── schema.json
│       └── toasts.json
├── clients/
│   └── toaster.js
├── docs/
│   └── usage.md
├── scripts/
│   └── validate-json.mjs
├── .gitignore
├── .nojekyll
├── index.html
├── LICENSE
├── package.json
└── README.md
```

---

## Local Validation

Install Node.js and run:

```bash
npm install
npm run validate
```

This checks every JSON file inside `api/`.

---

## GitHub Pages Setup

1. Push this repo to GitHub.
2. Open repository **Settings**.
3. Go to **Pages**.
4. Set source to:
   - Branch: `main`
   - Folder: `/root`
5. Save.

Your documentation page will be available at:

```text
https://TutorialsAndroid.github.io/toaster-api/
```

---

## Deployment Steps

```bash
git init
git branch -M main
git add .
git commit -m "Initial release of Toaster API"
git remote add origin https://github.com/TutorialsAndroid/toaster-api.git
git push -u origin main
git tag 1.0.0
git push origin 1.0.0
```

---

## License

MIT License.

---

## Author

Built with ❤️ by TutorialsAndroid.
