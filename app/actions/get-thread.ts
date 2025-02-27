"use server";

import { mastra } from "@/src/mastra";

export const getThreads = async (resourceId: string) => {
  const threadList = await mastra.memory?.getThreadsByResourceId({
    resourceId,
  });
  return { threadList };
};
