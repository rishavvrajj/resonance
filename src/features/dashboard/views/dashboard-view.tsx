import { SidebarTrigger } from "@/components/ui/sidebar";
import DashbaordHeader from "@/features/dashboard/components/dashboard-header";
import HeroPattern from "../components/hero-pattern";
import PageHeader from "@/components/page-header";
import TextInputPanel from "../components/text-input-panel";
import QuickACtionPanel from "../components/quick-action-panel";

export default function DashboardView() {
  return (
    <div className="relative">
      <PageHeader title="Home" className="lg:hidden"/>
      <HeroPattern />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashbaordHeader />
        <TextInputPanel />
        <QuickACtionPanel />
      </div>
    </div>
  )
}
