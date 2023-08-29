import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const reqHeader = headers();
  const token = reqHeader.get("Authorization");

  return NextResponse.json({ token });
}
