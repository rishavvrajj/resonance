import DashboardSidebar from "@/features/dashboard/components/dashboard-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import DashboardView from "@/features/dashboard/views/dashboard-view";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <DashboardView />
  );
}
