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
      <body className={ twMerge('bg-slate-200 dark:bg-slate-900', montserrat.className) }>
        <main className='w-full'>
          <Providers>
            {children}
            <div id='portal' />
          </Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
