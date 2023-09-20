'use client';

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from '@apollo/client';
import { useEffect, useId, useState } from 'react';
import { auth } from '@/graphql/mutations/auth.gql';

import type { TDevice } from 'types/generalTypes';
import { useRouter } from 'next/navigation';

export type TGetAllDevices = {
  allDevices: TDevice[];
}

export const revalidate = 1;

const Page = () => {
  const [ email, setEmail ] = useState('serhiibessonov.work@gmail.com');
  const [ password, setPassword ] = useState('QadsnDB*x454');
  const router = useRouter();
  const id = useId();

  const handleSetPassword = (password: string) => setPassword(password);
  const handleSetEmail = (email: string) => setEmail(email);

  const [ getAuth, { data, loading, error } ] = useMutation<{login: {token: string}}>(auth);

  const login = () => {
    if (email.length > 0 && password.length > 0) {
      getAuth({
        variables: {
          email,
          password,
        },
      });
    }
  };

  useEffect(() => {
    if (data?.login.token) {
      localStorage.setItem('user_token', data.login.token);
      router.push('/home');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ data ]);

  return (
    <main className='p-4 pl-[256px] w-full flex justify-center'>
      <section className='text-gray-600 body-font max-w-7xl'>
        <div className='container py-36 mx-auto flex flex-wrap items-center'>
          <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
            <h1 className='font-medium text-2xl text-center text-gray-900'>Example of custom app develop with DATACAKE graphql api</h1>
          </div>
          <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
            <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>Sign Up</h2>
            <div className='relative mb-4'>
              <label htmlFor='full-name' className='leading-7 text-sm text-gray-600'>
                Email
                <input
                  type='email'
                  id={ `${id}-email` }
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  value={ email }
                  onChange={ (e) => handleSetEmail(e.target.value) }
                />
              </label>
            </div>
            <div className='relative mb-4'>
              <label htmlFor='email' className='leading-7 text-sm text-gray-600'>
                Password
                <input
                  id={ `${id}-password` }
                  type='password'
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  value={ password }
                  onChange={ (e) => handleSetPassword(e.target.value) }
                />
              </label>
            </div>
            <button
              type='button'
              className='text-white disabled:bg-gray-500 hover:disabled:bg-gray-500 cursor-pointer disabled:cursor-default bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
              disabled={ email.length < 1 || password.length < 1 }
              onClick={ login }
            >
              {/* eslint-disable-next-line no-nested-ternary */}
              { loading ? 'Loading...' : error?.message ? error.message : 'Login' }
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;