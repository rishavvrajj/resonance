"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Coins } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { COST_PER_UNIT, TEXT_MAX_LENGTH } from "@/features/text-2-speech/data/constants"

export default function TextInputPanel() {

    const [text, setText] = useState("");
    const router = useRouter();

    const handleGenerate = () => {
        const trimed = text.trim();
        if (!trimed) return;
        router.push('/text-to-speech?text=${encodeURIComponent(value)}')
    };

    return (
        <div className="rounded-[22px] bg-linear-185 from-[#ff8ee3] from-15% via-[#57d7e0] via-39% to-[#dbf1f2] to-85% p-0.5 shadow-[0_0_0_4px_white]">
            <div className="rounded-[20px] bg-[#F9F9F9] p-1">
                <div className="space-y-4 rounded-2xl bg-white p-4 drop-shadow-xs">
                    <Textarea
                        placeholder="Start typing or Paste your text here..."
                        className="min-h-35 resize-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        maxLength={TEXT_MAX_LENGTH}
                    />
                </div>

                <div className="flex items-center justify-between p-2">
                    <Badge variant="outline" className="gap-3 border-dashed ">
                        <Coins className="size-3 text-chart-5" />
                        <span className=" text-xs">
                            {text.length === 0 ? (
                                "Start Typing to estimate"
                            ) : (
                                <>
                                    <span className="tabular-nums">
                                        ${(text.length * COST_PER_UNIT).toFixed(4)}
                                    </span>{" "}
                                    Estimated
                                </>
                            )}
                        </span>
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                        {text.length.toLocaleString()} / {TEXT_MAX_LENGTH.toLocaleString()} characters
                    </span>
                </div>

                <div className="flex items-center justify-end pb-1 px-1">
                    <Button
                        size="sm"
                        disabled={!text.trim()}
                        onClick={handleGenerate}
                        className="w-full lg:w-auto"
                    >
                        Generate Speech
                    </Button>
                </div>

            </div>
        </div>
    )
}
