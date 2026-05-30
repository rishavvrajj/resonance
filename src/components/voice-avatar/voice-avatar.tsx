"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useVoiceAvatar } from "./use-voice-avatar"
import { cn } from "@/lib/utils"

interface VoiceAvatarProp {
    seed: string;
    name: string;
    className?: string;
};

export default function VoiceAvatar({
    seed,
    name,
    className
}: VoiceAvatarProp ) {

    const avatarUrl = useVoiceAvatar(seed);

  return (
    <Avatar
    className={cn("size-4 border-white shadow-xs  ", className)}
    >
        <AvatarImage src={avatarUrl} alt={name}/>
        <AvatarFallback className="text-[8px]">
          {name.slice(0,2).toUpperCase()}
        </AvatarFallback>
    </Avatar>
  )
}