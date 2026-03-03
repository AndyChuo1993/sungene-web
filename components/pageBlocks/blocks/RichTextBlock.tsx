import RichText from '@/components/RichText'

export default function RichTextBlock({ content }: { content?: any }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="prose prose-invert max-w-none">
        <RichText value={content} />
      </div>
    </section>
  )
}
