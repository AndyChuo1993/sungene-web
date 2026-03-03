import InquiryForm from '@/components/InquiryForm'

export default function InquiryFormBlock({ title, subtitle }: any) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
      <div className="mt-6">
        <InquiryForm />
      </div>
    </section>
  )
}
