"use server";

import { mastra } from "@/src/mastra";
import { cookies } from "next/headers";

export const getThreads = async () => {
  const resourceId = (await cookies()).get("resourceId")?.value;
  if (!resourceId) throw new Error("Resource ID not found");
  const threadList = await mastra.memory?.getThreadsByResourceId({
    resourceId,
  });
  return { threadList };
};
