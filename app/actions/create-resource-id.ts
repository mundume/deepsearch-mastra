"use server";
import { z } from "zod";
import { actionClient } from ".";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createThread = actionClient
  .metadata({ actionName: "createThread" })
  .schema(z.object({ title: z.string() }))
  .action(async ({ ctx, parsedInput: { title } }) => {
    const resourceId = (await cookies()).get("resourceId")?.value;

    if (!resourceId) throw new Error("Could not create thread");

    const thread = await ctx.mastra.memory?.createThread({
      title,
      resourceId,
    });
    console.log(thread);

    if (!thread) throw new Error("Could not create thread");
    redirect(`/thread/${thread.id}`);
  });
