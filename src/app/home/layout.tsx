import Sidebar from '@/components/sidebar';
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
    <Sidebar />
    {children}
  </>
);

export default RootLayout;
