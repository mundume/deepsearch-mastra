import { mastra } from "@/src/mastra";
import { CoreUserMessage } from "@mastra/core";
import { memory } from "@/src/mastra/memory";

export async function POST(req: Request) {
  const { messages, resourceId, threadId } = await req.json();
  console.log({ resourceId });
  if (!mastra.memory) throw new Error("Mastra memory not set up");
  const myAgent = mastra.getAgent("myAgent");

  if (messages.length === 1) {
    const thread = await mastra.memory?.getThreadById({ threadId });

    if (!thread?.title || thread?.title === "New thread") {
      const agent = mastra.getAgent("myAgent");
      const title = await agent.generateTitleFromUserMessage({
        message: messages.filter((m: CoreUserMessage) => m.role === "user")[0],
      });

      await memory.updateThread({
        id: threadId,
        title,
        metadata: { project: "mastra", topic: "architecture" },
      });
    }
  }

  try {
    const res = await myAgent.stream(messages, {
      threadId,
      resourceId,
    });
    return res.toDataStreamResponse();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
