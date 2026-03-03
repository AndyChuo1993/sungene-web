export default function ImageBlock({ image, alt, caption, href }: { image?: any; alt?: string; caption?: string; href?: string }) {
  const url = typeof image === 'string' ? image : image?.url
  const Img = url
    ? <img className="rounded-xl border border-white/10 w-full" src={url} alt={alt || caption || 'image'} />
    : <div className="w-full h-[360px] bg-white/5 flex items-center justify-center text-white/60">（請在 CMS 選擇圖片）</div>
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      {href ? <a href={href}>{Img}</a> : Img}
      {caption && <div className="mt-2 text-white/60 text-sm">{caption}</div>}
    </section>
  )
}
