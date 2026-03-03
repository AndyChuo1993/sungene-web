export default function SpacerBlock({ size = 'md' as 'sm' | 'md' | 'lg' }: { size?: 'sm' | 'md' | 'lg' }) {
  const h = size === 'sm' ? 'h-6' : size === 'lg' ? 'h-24' : 'h-12'
  return <div className={h} />
}
