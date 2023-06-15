'use client';

import LearnUpProvider from '@/context';
import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import { usePathname } from 'next/navigation';
import checkIsPublicRoute from '@/functions/check-is-public-route';
import PrivateRoute from '@/components/PrivateRoute';

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'LearnUp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  const isPublicPage = checkIsPublicRoute(pathname);

  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <LearnUpProvider>
          {isPublicPage && children}
          {!isPublicPage && (
            <PrivateRoute>
              {children}
            </PrivateRoute>
          )}
        </LearnUpProvider>
      </body>
    </html>
  );
}
