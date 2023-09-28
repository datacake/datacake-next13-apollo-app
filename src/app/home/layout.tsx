import Sidebar from '@/components/sidebar';
import ThemeSwitcher from '@/components/themeSwitcher/ThemeSwitcher';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DATACAKE api example',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <>
    <header className='h-12 bg-slate-400 dark:bg-slate-800 fixed top-0 z-[100] w-full flex items-center justify-center'>
      <h2 className='text-xl font-bold text-zinc-800 dark:text-white'>Datacake Example</h2>
      <ThemeSwitcher />
    </header>
    <Sidebar />
    <div className='pl-[256px] pt-12'>
      {children}
    </div>
  </>
);

export default RootLayout;
