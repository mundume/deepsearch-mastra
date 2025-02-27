import { Chat } from "@/components/custom/chat";
import { mastra } from "@/src/mastra";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const threadId = (await searchParams).threadId;
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
    <>
      <Chat
        // @ts-expect-error
        initialMessages={initialMessages}
        resourceId={resourceId}
        threadId={threadId as string}
      />
    </>
  );
}
