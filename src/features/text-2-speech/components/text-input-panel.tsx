"use client"

import { Coins } from "lucide-react"
import { useStore } from "@tanstack/react-form"

import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { useTypedAppFormContext } from "@/hooks/use-app-form"

import { TEXT_MAX_LENGTH,COST_PER_UNIT } from "../data/constants"
import { ttsFormOptions } from "./text-to-speech-form"                                      
import GenerateButton from "./generate-button"

export function TextInputPanel() {

    const form = useTypedAppFormContext(ttsFormOptions)
    const text = useStore(form.store, (s) => s.values.text)
    const isSubmitting = useStore(form.store, (s) => s.isSubmitting)
    const isValid = useStore(form.store, (s) => s.isValid)

  return (
    <div className="flex h-full min-h-0 flex-col flex-1">
        <div className="relative min-h-0 flex-1">
            <form.Field name="text">
                {(field) => (
                    <Textarea 
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Start by typing or paste your text here..."
                        className="absolute inset-0 resize-none border-0 bg-transparent p-4 pb-6 lg:p-6 lg:pb-8 text-base leading-relaxed tracking-tight shadow-none wrap-break-word focus-visible:ring-0"
                        maxLength={TEXT_MAX_LENGTH}
                        disabled={isSubmitting}
                    />
                )}
            </form.Field>
            { /*Buttom Fade Overlay*/ }
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent" />
        </div>
        { /*Action Bar*/ }
        <div className="shrink-0 p-4 lg:p-6">
            {/* Mobile Layout */}
            <div className="flex flex-col gap-3 lg:hidden">
                <GenerateButton 
                    className="w-full"
                    disabled={isSubmitting}
                    isSubmitting={isSubmitting}
                    onSubmit={() => form.handleSubmit()}
                />
            </div>
            {/* Desktop View */}
            { Text.length === 0 ? (
                <div className="hidden lg:block">
                    <p className="text-sm text-muted-foreground">
                        Get Started by Typing or posting text above.
                    </p>
                </div>
            ) : (
                <div className="hidden items-center justify-between lg:flex">
                    <Badge variant="outline" className="gap-1.5 p-3 border-dashed">
                        <Coins className="size-3 text-chart-5"/>
                        <span className="text-xs">
                            <span className="tabular-nums">
                                ${(Text.length * COST_PER_UNIT).toFixed(4)}
                            </span>
                            {" "}
                            estimated
                        </span>
                    </Badge>
                    <div className="flex items-center gap-3">
                        <p className="text-xs tracking-tight">
                            {Text.length.toLocaleString()}
                            <span className="text-xs text-muted-foreground">
                                &nbsp;/&nbsp;{TEXT_MAX_LENGTH.toLocaleString()} Characters
                            </span>
                        </p>
                         <GenerateButton 
                            className="sm"
                            disabled={isSubmitting || !isValid}
                            isSubmitting={isSubmitting}
                            onSubmit={() => form.handleSubmit()}
                        />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}