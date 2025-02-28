"use client";
import { Button } from "../ui/button";
import { useAction } from "next-safe-action/hooks";
import { createThread } from "@/app/actions/create-resource-id";
import { Loader2, Plus } from "lucide-react";

export function CreateThreadButton() {
  const { execute, isPending } = useAction(createThread);

  return (
    <Button
      variant="default"
      className="w-full"
      onClick={() => {
        execute({
          title: "New thread",
        });
      }}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Plus className="h-4 w-4" />
      )}
    </Button>
  );
}
