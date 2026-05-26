/*!
 * Toaster API Client v1.0.0
 * A tiny client-side helper for the static Toaster API.
 * Works in browsers and basic CommonJS environments.
 */
(function (global) {
  "use strict";

  const DEFAULT_BASE_URL = "https://cdn.jsdelivr.net/gh/TutorialsAndroid/toaster-api@main/api/v1";

  const ENDPOINTS = {
    index: "index.json",
    meta: "meta.json",
    toasts: "toasts.json",
    toast: "toasts.json",
    jokes: "jokes.json",
    joke: "jokes.json",
    quotes: "quotes.json",
    quote: "quotes.json",
    facts: "facts.json",
    fact: "facts.json",
    roasts: "roasts.json",
    roast: "roasts.json",
    motivation: "motivation.json",
    mixed: "mixed.json",
    random: "mixed.json"
  };

  class ToasterAPI {
    constructor(options = {}) {
      this.baseUrl = (options.baseUrl || DEFAULT_BASE_URL).replace(/\/+$/, "");
      this.cache = options.cache || "default";
    }

    endpoint(type = "mixed") {
      const normalizedType = String(type).toLowerCase().trim();
      const file = ENDPOINTS[normalizedType];

      if (!file) {
        throw new Error(
          "Invalid Toaster API type: " +
          type +
          ". Available types: " +
          Object.keys(ENDPOINTS).join(", ")
        );
      }

      return `${this.baseUrl}/${file}`;
    }

    async collection(type = "mixed") {
      const response = await fetch(this.endpoint(type), {
        method: "GET",
        cache: this.cache,
        headers: {
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`Toaster API request failed with status ${response.status}`);
      }

      return response.json();
    }

    async all(type = "mixed") {
      const data = await this.collection(type);
      return data.items || [];
    }

    async random(type = "mixed") {
      const items = await this.all(type);

      if (!Array.isArray(items) || items.length === 0) {
        return null;
      }

      return items[this.randomIndex(items.length)];
    }

    randomIndex(max) {
      if (global.crypto && typeof global.crypto.getRandomValues === "function") {
        const array = new Uint32Array(1);
        global.crypto.getRandomValues(array);
        return array[0] % max;
      }

      return Math.floor(Math.random() * max);
    }
  }

  global.ToasterAPI = ToasterAPI;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = ToasterAPI;
  }
})(typeof window !== "undefined" ? window : globalThis);
