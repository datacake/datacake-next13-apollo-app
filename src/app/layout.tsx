'use client';

import Providers from 'src/app/Providers';
import './globals.scss';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import useAuth from '@/hooks/useAuth';

const montserrat = Montserrat({ subsets: [ 'latin' ] });

export const metadata: Metadata = {
  title: 'Create Next App',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useAuth();
  return (
    <html lang='en'>
      <body className={ twMerge('bg-slate-300', montserrat.className) }>
        <Providers>
          {children}
          <div id='portal' />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
