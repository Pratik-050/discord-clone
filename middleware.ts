import { RedirectToSignIn } from "@clerk/nextjs";
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// export default clerkMiddleware({
//     async afterAuth(auth, request) {
//         if (!auth.userID && !auth.isPublicRoute) {
//             RedirectToSignIn({ returnBackURL: request.url });
//         }
//         return NextResponse.next();
//     }
// });
export default clerkMiddleware();


export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};