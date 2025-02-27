"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useAction } from "next-safe-action/hooks";
import { createThread } from "@/app/actions/create-resource-id";

export function CreateThreadButton() {
  const router = useRouter();
  const res = useAction(createThread);

  const handleCreateThread = async (threadId: string) => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("threadId", threadId);

      router.push(`${window.location.pathname}?${searchParams.toString()}`);
    } catch (error) {
      console.error("Failed to create thread:", error);
    }
  };

  return (
    <Button
      onClick={async () => {
        await res.execute({
          title: "New thread",
        });

        if (res.result.data?.threadId) {
          await handleCreateThread(res.result.data.threadId);
        }
      }}
      disabled={res.isPending}
    >
      {res.isPending ? "Creating..." : "Create Thread"}
    </Button>
  );
}
