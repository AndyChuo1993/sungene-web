'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function WritePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    id: '',
    image: '/articles/lead-gen-guide.svg',
    zhTitle: '',
    zhCategory: '外貿開發指南',
    zhContent: '',
    enTitle: '',
    enCategory: 'Export Guide',
    enContent: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    
    const payload = {
      id: form.id,
      image: form.image,
      date: new Date().toISOString().split('T')[0],
      zh: {
        title: form.zhTitle,
        category: form.zhCategory,
        content: form.zhContent,
      },
      en: {
        title: form.enTitle,
        category: form.enCategory,
        content: form.enContent,
      },
    }

    const res = await fetch('/api/articles/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload)
    })
    
    if (res.ok) {
        alert('文章已發布（中英文）')
        router.push('/management/dashboard')
    } else {
        const text = await res.text().catch(() => '')
        alert('發布失敗' + (text ? `\n${text}` : ''))
    }
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-6 flex items-center justify-between">
         <h1 className="text-2xl font-bold">發布文章（中英同步）</h1>
         <Link href="/management/dashboard" className="text-blue-600">返回詢盤列表</Link>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <div>
            <label className="block text-sm font-medium mb-1">Slug（英文 / 建議手動填）</label>
            <input 
                required
                className="w-full p-2 border rounded"
                value={form.id}
                onChange={e => setForm({...form, id: e.target.value})}
                placeholder="e.g. b2b-cold-email-tips"
            />
        </div>
        
        <div>
            <label className="block text-sm font-medium mb-1">圖片 URL</label>
            <input 
                className="w-full p-2 border rounded"
                value={form.image}
                onChange={e => setForm({...form, image: e.target.value})}
            />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="font-bold">中文內容</div>
            <div>
              <label className="block text-sm font-medium mb-1">分類</label>
              <select
                className="w-full p-2 border rounded"
                value={form.zhCategory}
                onChange={e => setForm({ ...form, zhCategory: e.target.value })}
              >
                <option>外貿開發指南</option>
                <option>市場分析</option>
                <option>產業分析</option>
                <option>案例</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">標題</label>
              <input
                required
                className="w-full p-2 border rounded"
                value={form.zhTitle}
                onChange={e => setForm({ ...form, zhTitle: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">內文（段落用空一行分隔）</label>
              <textarea
                required
                rows={14}
                className="w-full p-2 border rounded"
                value={form.zhContent}
                onChange={e => setForm({ ...form, zhContent: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-bold">English Content</div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                className="w-full p-2 border rounded"
                value={form.enCategory}
                onChange={e => setForm({ ...form, enCategory: e.target.value })}
              >
                <option>Export Guide</option>
                <option>Market Analysis</option>
                <option>Industry Analysis</option>
                <option>Case Study</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                required
                className="w-full p-2 border rounded"
                value={form.enTitle}
                onChange={e => setForm({ ...form, enTitle: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Content (use blank line for new paragraph)</label>
              <textarea
                required
                rows={14}
                className="w-full p-2 border rounded"
                value={form.enContent}
                onChange={e => setForm({ ...form, enContent: e.target.value })}
              />
            </div>
          </div>
        </div>

        <button 
            disabled={loading}
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700"
        >
            {loading ? '發布中...' : '同步發布（中/英）'}
        </button>
      </form>
    </div>
  )
}
