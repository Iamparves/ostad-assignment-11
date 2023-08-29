import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { theme } = await req.json();

  return NextResponse.json(
    {},
    {
      headers: {
        "Set-Cookie": `theme=${theme}; path=/`,
      },
    }
  );
}
