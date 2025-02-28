import { FirecrawlIntegration } from "@mastra/firecrawl";

export const firecrawl = new FirecrawlIntegration({
  config: {
    API_KEY: process.env.FIRECRAWL_API_KEY!,
  },
});
