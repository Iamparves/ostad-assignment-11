import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname === "/redirect") {
    return NextResponse.redirect(new URL("/about", req.url));
  }
}
