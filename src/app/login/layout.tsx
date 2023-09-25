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
    { children }
  </div>
);

export default AuthLayout;
