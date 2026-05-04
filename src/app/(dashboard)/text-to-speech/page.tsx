import TextToSpeechView from "@/features/text-2-speech/views/TextToSpeechView"
import { Metadata } from "next"

export const metadata : Metadata = { title : "Text To Speech"}


export default function TextToSpeech() {
  return <TextToSpeechView />
}
