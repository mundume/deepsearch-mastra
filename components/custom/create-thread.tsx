"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useAction } from "next-safe-action/hooks";
import { createThread } from "@/app/actions/create-resource-id";

export function CreateThreadButton() {
  const router = useRouter();
  const { execute, isPending } = useAction(createThread);

  return (
    <Button
      variant="default"
      onClick={() => {
        execute({
          title: "New thread",
        });
      }}
      disabled={isPending}
    >
      {isPending ? "Creating..." : "Create Thread"}
    </Button>
  );
}
