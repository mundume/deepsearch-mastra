"use client";
import { Thread } from "@/components/assistant-ui/thread";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
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
      <div className="w-full flex justify-center items-center">
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
}
