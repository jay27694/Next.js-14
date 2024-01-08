import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const data = await new Response(req.body).json()
      console.log('Received data:', data);
      return NextResponse.json(data, { status: 200 });     
    } catch (error) {
      console.error('Error processing data:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });      
    }
  } else {    
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });   
  }
}
