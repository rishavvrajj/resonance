import TextToSpeechLayout from "@/features/text-2-speech/views/TextToSpeechLayout"

export default function layout( {
    children
} : {
    children : React.ReactNode
}) {
  return (
      <TextToSpeechLayout>
        {children}
      </TextToSpeechLayout>
  )
}

