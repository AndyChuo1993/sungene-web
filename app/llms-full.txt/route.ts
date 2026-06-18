import { buildLlmsFullTxt, textResponse } from '@/lib/llms'

export async function GET() {
  return textResponse(buildLlmsFullTxt())
}
