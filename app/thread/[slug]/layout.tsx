import AppSidebar from "@/components/custom/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

export default async function RepoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-auto flex justify-center">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
