import { Chat } from "@/components/custom/chat";
import { mastra } from "@/src/mastra";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const threadId = (await params).slug;
  const resourceId = (await cookies()).get("resourceId")?.value;
  const [queryResponse, thread] = await Promise.all([
    mastra.memory?.query({ threadId: threadId as string }),
    mastra.memory?.getThreadById({ threadId: threadId as string }),
  ]);

  if (!thread || !resourceId) notFound();

  const initialMessages = (queryResponse?.uiMessages ?? []).map((m) => ({
    ...m,
    content:
      m.content === "" && !!m.toolInvocations?.length
        ? m.toolInvocations?.map((tool) => ({ ...tool, type: "tool-call" }))
        : m.content,
  }));
  return (
    <div className="flex items-center justify-center  max-w-3xl mx-auto">
      <Chat
        // @ts-expect-error
        initialMessages={initialMessages}
        resourceId={resourceId}
        threadId={threadId as string}
      />
    </div>
  );
}
