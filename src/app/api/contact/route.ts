import { NextRequest, NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { error } = await supabaseServer.from('contact_messages').insert(data)
  if (error) {
    console.error('Supabase insert error', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ success: true })
}
