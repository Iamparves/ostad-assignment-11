import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname === "/redirect") {
    return NextResponse.redirect(new URL("/about", req.url));
  }

  if (req.nextUrl.pathname === "/api/authorization") {
    const reqHeaders = new Headers(req.headers);
    const token = reqHeaders.get("Authorization");

    if (token) {
      reqHeaders.set("Authorization", "Bearer " + token);

      return NextResponse.next({
        request: {
          headers: reqHeaders,
        },
      });
    } else {
      NextResponse.json({ error: "No Authorization Header" });
    }
  }
}
