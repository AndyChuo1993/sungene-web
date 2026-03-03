type Node = any

function extractText(node: Node): string {
  if (!node) return ''
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  // Lexical richText minimal serializer: root -> children[]
  if (node.root && Array.isArray(node.root.children)) {
    return node.root.children.map(extractText).join('\n')
  }
  if (node.children && Array.isArray(node.children)) {
    return node.children.map(extractText).join('')
  }
  if (node.text) return node.text
  return ''
}

export default function RichText({ value }: { value: any }) {
  if (!value) return null
  if (typeof value === 'string') {
    return <p className="whitespace-pre-line text-white/80">{value}</p>
  }
  const text = extractText(value)
  return <p className="whitespace-pre-line text-white/80">{text}</p>
}
