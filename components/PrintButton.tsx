'use client'

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-sm bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
    >
      {label}
    </button>
  )
}
