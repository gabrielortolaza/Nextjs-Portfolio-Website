// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Not Allowed Method!' });
}

export async function POST(request: Request) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const body = await request.json();
  const { email, password } = body;

  try {
    const res = await axios.post(`${apiUrl}/auth/login`, 
      { email, password }, 
      {});
    console.log('res: ', res);
    if (res.data.access_token) {
      localStorage.setItem('token', res.data.access_token);
    }
    
    return NextResponse.json(res);
  } catch (error) {
    console.log('login err: ', error);
    // return NextResponse.json(error, { status: 400 });
  }
}
