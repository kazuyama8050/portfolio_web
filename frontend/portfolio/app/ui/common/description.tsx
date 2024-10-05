import { Texts } from "@/app/types/index.d"

// export function Description( texts: Texts ) {
export function Description( { texts }: {texts: Texts} ) {
  return (
    <div className="max-w-6xl mx-auto p-3">
        <div className="rounded-lg p- space-y-1">
            {texts.map((text, index) => (
              <p key={index} className="text-gray-600">
                {text !== '' ? text : <br/>}
              </p>
            ))}
        </div>
    </div>
  )
}