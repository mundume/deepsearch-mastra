import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { app } from "../utils/utils";
import { SearchResponse, type ScrapeResponse } from "@mendable/firecrawl-js";

export const firecrawlScrape = createTool({
  id: "Firecrawl Scrape",
  inputSchema: z.object({
    url: z.string(),
  }),
  description: `Scrape web pages. Use this to get from a page when you have the url.`,
  execute: async ({ context: { url } }) => {
    console.log("url", url);
    try {
      const res = (await app.scrapeUrl(url, {
        formats: ["markdown", "html"],
      })) as ScrapeResponse;
      return res.markdown;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to scrape URL");
    }
  },
});

export const firecrawlSearch = createTool({
  id: "Firecrawl Search",
  inputSchema: z.object({
    query: z.string(),
  }),
  description: `Search web pages. Use this to get from a page when you have the url.`,
  execute: async ({ context: { query } }) => {
    console.log("query", query);
    try {
      const res = (await app.search(query, {
        formats: ["markdown", "html"],
      })) as SearchResponse;
      return res.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to search query");
    }
  },
});
