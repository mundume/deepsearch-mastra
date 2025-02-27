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
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
