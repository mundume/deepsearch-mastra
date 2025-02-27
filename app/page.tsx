import { Chat } from "@/components/custom/chat";
import { CreateThreadButton } from "@/components/custom/create-thread";
import { mastra } from "@/src/mastra";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function Page() {
  return (
    <>
      <CreateThreadButton />
    </>
  );
}
