import { http } from "@hypermode/modus-sdk-as";
import { Article, ArticleResult } from "./classes";

// Fetch data from NYT API
// Load into collection (w/ embedding)
// Load into Dgraph
// Geocode location, add Point in Dgraph
// Add search news function
// Automate summary / full text

export function sayHello(name: string | null = null): string {
  console.log("foo bar");
  console.log(process.env.get("MODUS_NYT_API_KEY"));
  return `Hello, ${name || "World"}!`;
}

export function fetchNews(): ArticleResult {
  const response = http.fetch(
    "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json",
  );
  console.log(response.text());
  return response.json<ArticleResult>();
}
