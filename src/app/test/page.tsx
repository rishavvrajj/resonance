import { prisma } from "@/lib/db"

export default async function TestPage() {
    const voices = await prisma.voice.findMany();

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">
        Voices ({voices.length})
      </h1>
      <ul className="mt-4 space-y-2">
        {voices.map((v) => (
          <li key={v.id}>
            {v.name} - {v.variant.toLowerCase()}
          </li>
        ))}
      </ul>
    </div>
  )
}