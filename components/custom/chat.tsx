"use client";
import { Thread } from "@/components/assistant-ui/thread";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { useSearchParams } from "next/navigation";
import { AiMessageType } from "@mastra/core";

export function Chat({
  initialMessages,
  resourceId,
  threadId,
}: {
  initialMessages: Array<
    AiMessageType & { role: Exclude<AiMessageType["role"], "data"> }
  >;
  resourceId?: string;
  threadId?: string;
}) {
  const runtime = useChatRuntime({
    api: "/api/chat",
    initialMessages,
    body: {
      resourceId,
      threadId,
    },
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <main className="h-dvh w-full ">
        <Thread />
      </main>
    </AssistantRuntimeProvider>
  );
}
