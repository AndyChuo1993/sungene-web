import { buildLlmsTxt, textResponse } from '@/lib/llms'

export async function GET() {
  return textResponse(buildLlmsTxt())
}
