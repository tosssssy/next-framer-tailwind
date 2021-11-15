import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <ul className='flex'>
        <li>
          <Link href='/'>
            <a className='block p-4 hover:bg-blue-500'>home</a>
          </Link>
        </li>
        <li>
          <Link href='/news'>
            <a className='block p-4 hover:bg-blue-500'>news</a>
          </Link>
        </li>
      </ul>
      {children}
    </>
  );
};
