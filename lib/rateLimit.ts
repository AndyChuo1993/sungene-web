type Entry = { count: number; resetAt: number }
const map = new Map<string, Entry>()

export function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now()
  const e = map.get(key)
  if (!e || e.resetAt < now) {
    map.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true }
  }
  if (e.count >= limit) return { ok: false }
  e.count++
  return { ok: true }
}
