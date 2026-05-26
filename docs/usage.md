# Toaster API Usage Guide 🍞🔥

## Base URL

```text
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1
```

## Fetch all jokes

```javascript
const response = await fetch("https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/jokes.json");
const data = await response.json();

console.log(data.items);
```

## Pick a random joke

```javascript
const response = await fetch("https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1/jokes.json");
const data = await response.json();

const item = data.items[Math.floor(Math.random() * data.items.length)];

console.log(item.content);
```

## Use the Toaster API Client

```html
<script src="https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/clients/toaster.js"></script>

<script>
  const toaster = new ToasterAPI();

  toaster.random("mixed").then(item => {
    document.body.innerHTML = `<h1>${item.content}</h1>`;
  });
</script>
```

## Available Types

```text
toasts
jokes
quotes
facts
roasts
motivation
mixed
```

## Production Recommendation

Use version tags in production:

```text
https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@1.0.0/api/v1/jokes.json
```

Use `@main` only while testing.
