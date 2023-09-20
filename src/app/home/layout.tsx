import Sidebar from '@/components/sidebar';

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
