import { Agent } from "@mastra/core/agent";
import { groq } from "@ai-sdk/groq";
import { memory } from "../memory";
import { firecrawlScrape, firecrawlSearch } from "../tools/firecrawl";

export const myAgent = new Agent({
  name: "My Agent",
  instructions: "You are a helpful assistant.",
  //   @ts-expect-error
  memory,
  tools: {
    firecrawlScrape,
    firecrawlSearch,
  },
  model: groq("llama-3.3-70b-versatile"),
});
