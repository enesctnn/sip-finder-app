import { NextRequest } from 'next/server';
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from './routes';
import { fetchUserServerSide } from '@/utils/fetchUserServerSide';

export async function middleware(request: NextRequest) {
	const { nextUrl } = request;

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

	if (isApiAuthRoute) {
		return;
	}

	const isLoggedIn = await fetchUserServerSide();

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}
		return;
	}

	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL('/auth/login', nextUrl));
	}

	return;
}

export const config = {
	/*
	 Protects all routes, including api/trpc.
   See https://clerk.com/docs/references/nextjs/auth-middleware 
	 */
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)'
	]
};
