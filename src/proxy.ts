import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Nos langues supportées
const locales = ['fr', 'nl', 'en', 'de'];
const defaultLocale = 'fr';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // On ignore les requêtes vers les fichiers statiques (images, css, etc.)
  if (
    pathname.startsWith(`/_next/`) ||
    pathname.includes('.') || 
    pathname.startsWith('/api/')
  ) {
    return NextResponse.next();
  }

  // On vérifie si l'URL contient déjà une langue supportée
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Logique simple pour l'instant : si aucune langue, on redirige vers le Français par défaut
  // Plus tard on pourra ajouter un package "accept-language" pour lire le header du navigateur
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Ignore all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
};