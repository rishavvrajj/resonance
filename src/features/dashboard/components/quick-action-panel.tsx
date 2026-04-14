import { quickActions } from "../data/quick-actions";
import QuickActionCard from "@/features/dashboard/components/quick-action-card";

export default function QuickACtionPanel() {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold"> Quick Action </h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {quickActions.map((action) => (
                    <QuickActionCard
                        key={action.title}
                        title={action.title}
                        description={action.description}
                        gradient={action.gradient}
                        href={action.href}
                    />
                ))}
            </div>
        </div>
    );
};