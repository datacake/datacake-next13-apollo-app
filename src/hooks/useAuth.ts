'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

function getUserStatus(token: string) {
  if (token) {
    return 'user';
  }
  return 'guest';
}

function getRequiredStatus(pathname: string) {
  if (pathname === '/') {
    return 'ques';
  }
  if (pathname === '/login') {
    return 'quest';
  }
  if (pathname === '/home') {
    return 'user';
  }
  return 'guest';
}

function useAuth() {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (token) {
      const userStatus = getUserStatus(token);
      const requiredStatus = getRequiredStatus(path);

      if (userStatus !== requiredStatus) {
        if (userStatus === 'guest') {
          router.replace('/login');
        } else {
          router.replace('/home');
        }
      }
    } else {
      router.replace('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ router, path ]);
}

export default useAuth;
