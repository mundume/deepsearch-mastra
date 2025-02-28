import { getThreads } from "@/app/actions/get-threads";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export const ThreadList = async () => {
  const { threadList } = await getThreads();

  return (
    <div className="space-y-2 w-full max-w-md mx-auto">
      {threadList?.length === 0 && (
        <div className="text-center py-6 text-muted-foreground">
          No threads found
        </div>
      )}

      <div className="flex flex-col gap-2">
        {threadList?.length}
        {threadList?.map((thread) => (
          <Link
            key={thread.id}
            href={`/thread/${thread.id}`}
            className="flex items-center w-full p-3 rounded-md border border-border hover:bg-accent transition-colors text-left"
          >
            <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="font-medium">{thread.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
