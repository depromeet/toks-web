import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken') ?? null;
  const refreshToken = request.cookies.get('refreshToken') ?? null;

  return NextResponse.json({
    accessToken,
    refreshToken,
  });
}
