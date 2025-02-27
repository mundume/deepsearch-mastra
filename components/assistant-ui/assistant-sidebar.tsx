import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import type { FC, PropsWithChildren } from "react";

import { CreateThreadButton } from "../custom/create-thread";

export const AssistantSidebar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-screen">
      {/* Threads sidebar */}
      <ResizablePanel
        defaultSize={25}
        minSize={15}
        maxSize={40}
        className="border-r"
      >
        <div className="flex h-full flex-col">
          <div className="p-4">
            <CreateThreadButton />
          </div>
          <div className="flex-1 overflow-auto p-2">
            {/* List of threads would go here */}
            <div className="space-y-2">
              {/* Example thread items */}
              <div className="rounded-md p-2 hover:bg-muted cursor-pointer">
                Thread 1
              </div>
              <div className="rounded-md p-2 hover:bg-muted cursor-pointer">
                Thread 2
              </div>
              <div className="rounded-md p-2 hover:bg-muted cursor-pointer">
                Thread 3
              </div>
            </div>
          </div>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* Main content area */}
      <ResizablePanel defaultSize={75}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
};
