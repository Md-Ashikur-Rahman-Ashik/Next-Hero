import { NextResponse } from "next/server";

// const user = true;
const coo = "NextSuperHero";

export const middleware = (request) => {
  //   if (!user) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   } else {
  //     return NextResponse.next();
  //   }

  const cookies = request.cookies.get("token");

  if (!cookies || cookies.value !== coo) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
};

export const config = {
  matcher: ["/dashboard", "/services"],
};
