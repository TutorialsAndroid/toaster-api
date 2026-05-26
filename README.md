<div align="center">

# 🍞🔥 Toaster API

### Fresh random fun, popped hot from a CDN.

<p>
  <img src="https://img.shields.io/badge/API-Static%20JSON-f97316?style=for-the-badge&logo=json&logoColor=white" />
  <img src="https://img.shields.io/badge/CDN-jsDelivr-ff7a00?style=for-the-badge&logo=jsdelivr&logoColor=white" />
  <img src="https://img.shields.io/badge/Hosting-GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/Version-v1.0.0-f59e0b?style=for-the-badge" />
</p>

<p>
  <img src="https://img.shields.io/github/license/TutorialsAndroid/toaster-api?style=for-the-badge" />
  <img src="https://img.shields.io/github/stars/TutorialsAndroid/toaster-api?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/github/issues/TutorialsAndroid/toaster-api?style=for-the-badge&logo=github" />
</p>

<p>
  <b>Toaster API</b> is a fun, lightweight, open-source static JSON API that serves jokes, quotes, facts, roasts, motivation lines, and toast-style one-liners.
</p>

<p>
  Built for developers who want a tiny playful API for demos, apps, docs, portfolios, experiments, and fun projects.
</p>

<p>
  <a href="https://TutorialsAndroid.github.io/toaster-api/">
    <img src="https://img.shields.io/badge/View%20Landing%20Page-Open%20Docs-f97316?style=for-the-badge&logo=githubpages&logoColor=white" />
  </a>
  <a href="https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/index.json">
    <img src="https://img.shields.io/badge/Try%20API-Live%20JSON-22c55e?style=for-the-badge&logo=fastapi&logoColor=white" />
  </a>
</p>

</div>

---

## 🍞 What is Toaster API?

Toaster API is like a tiny internet toaster.

You call it.

It pops out something fun.

```txt
Request goes in  →  Toast comes out 🍞
````

It can serve:

* 😂 Developer jokes
* 💬 Fun quotes
* 🧠 Interesting facts
* 🔥 Friendly roasts
* 🚀 Motivation lines
* 🍞 Random toast-style one-liners
* 🎲 Mixed fun content

---

## ⚡ Live API

### CDN Base URL

```txt
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1
```

### Stable Production URL

```txt
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@1.0.0/api/v1
```

### GitHub Pages URL

```txt
https://TutorialsAndroid.github.io/toaster-api/
```

---

## 🧭 API Endpoints

| Endpoint           | Description                          | Live                                                                                         |
| ------------------ | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| `/index.json`      | API info, version, and endpoint list | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/index.json)      |
| `/meta.json`       | Project metadata                     | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/meta.json)       |
| `/toasts.json`     | Toast-style fun one-liners           | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/toasts.json)     |
| `/jokes.json`      | Developer and general jokes          | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/jokes.json)      |
| `/quotes.json`     | Fun and motivational quotes          | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/quotes.json)     |
| `/facts.json`      | Interesting small facts              | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/facts.json)      |
| `/roasts.json`     | Friendly roast lines                 | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/roasts.json)     |
| `/motivation.json` | Motivational lines                   | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/motivation.json) |
| `/mixed.json`      | Combined content from all categories | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/mixed.json)      |
| `/schema.json`     | JSON response schema                 | [Open](https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/schema.json)     |

---

## 🚀 Quick Start

### Fetch jokes using JavaScript

```javascript
fetch("https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/jokes.json")
  .then(response => response.json())
  .then(data => {
    console.log(data.items);
  });
```

---

## 🎲 Get a Random Joke

Because Toaster API is hosted on GitHub and jsDelivr, it is a **static API**.

That means there is no real backend server to generate dynamic random responses.

Instead, fetch the JSON collection and randomly select an item on the client side.

```javascript
fetch("https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/jokes.json")
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.items.length);
    const randomJoke = data.items[randomIndex];

    console.log(randomJoke.content);
  });
```

---

## 🍞 Use the Toaster JavaScript Client

Toaster API includes a tiny JavaScript helper client.

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

### Random mixed toast

```javascript
const toaster = new ToasterAPI();

const toast = await toaster.random("mixed");

console.log(toast.content);
```

### Fetch all quotes

```javascript
const toaster = new ToasterAPI();

const quotes = await toaster.all("quotes");

console.log(quotes);
```

---

## 📦 Example Response

```json
{
  "meta": {
    "name": "Toaster API",
    "slug": "toaster-api",
    "version": "1.0.0",
    "endpoint": "jokes",
    "updated_at": "2026-05-26"
  },
  "count": 10,
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

## 🧁 Available Content Types

| Type       | Endpoint           | Example                                                             |
| ---------- | ------------------ | ------------------------------------------------------------------- |
| Toasts     | `/toasts.json`     | `Fresh toast delivered. No crumbs attached.`                        |
| Jokes      | `/jokes.json`      | `Why did the developer go broke? Because he used up all his cache.` |
| Quotes     | `/quotes.json`     | `Clean code is kindness for your future self.`                      |
| Facts      | `/facts.json`      | `JSON stands for JavaScript Object Notation.`                       |
| Roasts     | `/roasts.json`     | `Your TODO comments have started forming a startup.`                |
| Motivation | `/motivation.json` | `Ship the first version. Improve the next one.`                     |
| Mixed      | `/mixed.json`      | Combined content from all categories                                |

---

## 🧑‍💻 Android Java Usage

```java
String url = "https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/jokes.json";
```

You can use:

* Retrofit
* OkHttp
* Volley
* HttpURLConnection
* Any Android networking library

---

## 🧪 Static API vs Real Backend API

| Feature                     | Toaster API |
| --------------------------- | ----------- |
| Static JSON files           | ✅ Yes       |
| GitHub hosting              | ✅ Yes       |
| jsDelivr CDN                | ✅ Yes       |
| GitHub Pages docs           | ✅ Yes       |
| Free hosting                | ✅ Yes       |
| GET requests                | ✅ Yes       |
| POST requests               | ❌ No        |
| Database writes             | ❌ No        |
| Authentication              | ❌ No        |
| Server-side random endpoint | ❌ No        |
| Client-side random helper   | ✅ Yes       |

---

## 🏗️ Project Structure

```txt
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
├── index.html
├── LICENSE
├── package.json
└── README.md
```

---

## ✅ Validate JSON Locally

Install dependencies:

```bash
npm install
```

Run validation:

```bash
npm run validate
```

This checks that all JSON files inside the `api/` folder are valid.

---

## 🤖 GitHub Actions

This project includes a GitHub Actions workflow that automatically validates JSON files on every push and pull request.

```txt
.github/workflows/validate-json.yml
```

If any JSON file is broken, the workflow will fail before bad data reaches production.

---

## 🚢 Deploy to GitHub

```bash
git init
git branch -M main
git add .
git commit -m "Initial release of Toaster API"
git remote add origin https://github.com/TutorialsAndroid/toaster-api.git
git push -u origin main
```

Create a production version tag:

```bash
git tag 1.0.0
git push origin 1.0.0
```

---

## 🏷️ Versioning Strategy

Use `@main` while testing:

```txt
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/index.json
```

Use version tags for production:

```txt
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@1.0.0/api/v1/index.json
```

Recommended pattern:

```txt
Development  →  @main
Production   →  @1.0.0
Next release →  @1.0.1
```

---

## 🌍 Enable GitHub Pages

1. Go to your GitHub repository.
2. Open **Settings**.
3. Go to **Pages**.
4. Select **Deploy from branch**.
5. Choose:

   * Branch: `main`
   * Folder: `/root`
6. Save.

Your landing page will be live at:

```txt
https://TutorialsAndroid.github.io/toaster-api/
```

---

## 🎯 Good Use Cases

Toaster API is perfect for:

* Portfolio projects
* Android demo apps
* JavaScript practice projects
* API learning examples
* Fun widgets
* Random quote sections
* Developer joke cards
* Static API experiments
* GitHub Pages demos
* CDN-based JSON delivery examples

---

## 🧩 Repository Topics

You can add these topics to your GitHub repository:

```txt
static-api
json-api
fun-api
developer-jokes
quotes-api
facts-api
jsdelivr
github-pages
cdn-api
open-source
```

---

## 🛣️ Roadmap

* [x] Static JSON API structure
* [x] jsDelivr support
* [x] GitHub Pages landing page
* [x] JavaScript helper client
* [x] JSON validation script
* [x] GitHub Actions workflow
* [ ] Add more jokes
* [ ] Add more roast lines
* [ ] Add category-specific badges
* [ ] Add API examples for Android, Flutter, and Python

---

## 🤝 Contributing

Contributions are welcome.

You can contribute by:

* Adding new jokes
* Adding new quotes
* Adding new facts
* Improving documentation
* Fixing JSON formatting
* Improving the landing page
* Adding examples for more languages

Before opening a pull request, run:

```bash
npm run validate
```

---

## 📜 License

```txt
MIT License
```

This project is open-source and free to use.

---

## 👨‍💻 Author

<div align="center">

Built with ❤️, 🍞, and a little chaos by <strong>TutorialsAndroid</strong>

<p>
  <a href="https://github.com/TutorialsAndroid">
    <img src="https://img.shields.io/badge/GitHub-TutorialsAndroid-181717?style=for-the-badge&logo=github" />
  </a>
</p>

</div>

---

<div align="center">

### 🍞 Pop it. Fetch it. Toast it.

<p>
  <img src="https://img.shields.io/badge/Made%20for-Fun-f97316?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Powered%20by-JSON-facc15?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Served%20by-CDN-22c55e?style=for-the-badge" />
</p>

</div>
