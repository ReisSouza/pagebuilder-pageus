import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="bg-background text-foreground dark">{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
