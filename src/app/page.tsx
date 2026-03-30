'use client'
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center "
    onClick={() => toast.success('Hello World!')}>
      <Button>Click me</Button>
    </div>
  );
}
