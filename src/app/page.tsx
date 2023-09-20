'use client';

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from '@apollo/client';
import { useEffect, useId, useState } from 'react';
import { auth } from '@/graphql/mutations/auth.gql';

import type { TDevice } from 'types/generalTypes';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';

export type TGetAllDevices = {
  allDevices: TDevice[];
}

export const revalidate = 1;

const Page = () => {
  useAuth();
  return (
    <>
    </>
  );
};

export default Page;
