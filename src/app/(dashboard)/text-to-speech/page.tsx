import TextToSpeechView from "@/features/text-2-speech/views/TextToSpeechView"
import { trpc, HydrateClient, prefetch } from "@/trpc/server"
import { Metadata } from "next"

export const metadata : Metadata = { title : "Text To Speech"}


export default async function TextToSpeech({
  searchParams,
}: {
  searchParams: Promise<{ text?: string; voiceId?: string }>;
}) {
  const { text, voiceId } = await searchParams;

  prefetch(trpc.voices.getAll.queryOptions());

  return (
    <HydrateClient>
      <TextToSpeechView initialValues={{ text, voiceId }} />
    </HydrateClient>
  );
};