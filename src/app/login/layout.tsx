import ThemeSwitcher from '@/components/themeSwitcher/ThemeSwitcher';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'login page',
};

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div>
    <ThemeSwitcher
      classnames='bg-slate-200 dark:bg-slate-900'
    />
    { children }
  </div>
);

export default AuthLayout;
