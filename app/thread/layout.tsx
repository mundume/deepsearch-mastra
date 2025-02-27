import type React from "react";
import { cookies } from "next/headers";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

export default async function ThreadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarContent>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">Threads</h2>
            </div>
          </SidebarContent>
        </Sidebar>
        <div className="min-w-full max-w-full items-center justify-center">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
