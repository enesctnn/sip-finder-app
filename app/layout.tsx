import { UserContextProvider } from '@/store/user-context/UserContextProvider';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './styles/globals.scss';

const noto = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sip Finder App',
  description: 'A cocktail viewing app powered by The Cocktail DB.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <UserContextProvider>
          <div id="modal-root"></div>
          <main>{children}</main>
        </UserContextProvider>
      </body>
    </html>
  );
}
